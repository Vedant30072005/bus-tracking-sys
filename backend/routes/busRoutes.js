// ============================================================
// Bus Routes — CRUD + Location Updates
// ============================================================
const express = require('express');
const { db } = require('../config/db');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// GET /api/buses — List all buses
router.get('/', (req, res) => {
  const { status, type, routeId } = req.query;
  let result = [...db.buses];

  if (status) result = result.filter(b => b.status === status);
  if (type) result = result.filter(b => b.type.toLowerCase().includes(type.toLowerCase()));
  if (routeId) result = result.filter(b => b.routeId === routeId);

  // Attach route info to each bus
  result = result.map(bus => {
    const route = db.routes.find(r => r.id === bus.routeId);
    return {
      ...bus,
      isSimulated: bus.isSimulated !== false,
      route: route ? { id: route.id, routeName: route.routeName, from: route.from, to: route.to } : null
    };
  });

  res.json(result);
});

// GET /api/buses/:id — Get single bus with full details
router.get('/:id', (req, res) => {
  const bus = db.buses.find(b => b.id === req.params.id);
  if (!bus) return res.status(404).json({ message: 'Bus not found' });

  const route = db.routes.find(r => r.id === bus.routeId);
  res.json({ ...bus, routeDetails: route || null });
});

// PUT /api/buses/:id/location — Update bus location (for driver/simulator)
router.put('/:id/location', (req, res) => {
  const { lat, lng } = req.body;
  const bus = db.buses.find(b => b.id === req.params.id);
  if (!bus) return res.status(404).json({ message: 'Bus not found' });

  bus.currentLocation = { lat, lng };
  res.json({ message: 'Location updated', currentLocation: bus.currentLocation });
});

// POST /api/buses — Admin: Add a new bus
router.post('/', authMiddleware, adminMiddleware, (req, res) => {
  const { busNumber, name, type, routeId, driverId, capacity, amenities } = req.body;
  
  const driver = db.drivers.find(d => d.id === driverId);
  const route = db.routes.find(r => r.id === routeId);

  if (!route) return res.status(400).json({ message: 'Invalid route ID' });

  const newBus = {
    id: 'b' + Date.now(),
    busNumber,
    name,
    type,
    routeId,
    driverId,
    driver: driver || null,
    status: 'stopped',
    capacity: capacity || 40,
    amenities: amenities || [],
    currentLocation: { lat: route.stops[0].lat, lng: route.stops[0].lng }
  };

  db.buses.push(newBus);
  res.status(201).json(newBus);
});

// PUT /api/buses/:id — Admin: Edit bus
router.put('/:id', authMiddleware, adminMiddleware, (req, res) => {
  const index = db.buses.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Bus not found' });

  const updates = req.body;
  if (updates.driverId) {
    updates.driver = db.drivers.find(d => d.id === updates.driverId) || null;
  }

  db.buses[index] = { ...db.buses[index], ...updates };
  res.json(db.buses[index]);
});

// DELETE /api/buses/:id — Admin: Delete bus
router.delete('/:id', authMiddleware, adminMiddleware, (req, res) => {
  const index = db.buses.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Bus not found' });

  db.buses.splice(index, 1);
  res.json({ message: 'Bus deleted' });
});

module.exports = router;
