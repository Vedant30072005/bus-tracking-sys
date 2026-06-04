// ============================================================
// Route Management API
// ============================================================
const express = require('express');
const { db } = require('../config/db');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

// GET /api/routes — List all routes
router.get('/', (req, res) => {
  const result = db.routes.map(route => ({
    ...route,
    activeBuses: db.buses.filter(b => b.routeId === route.id && b.status === 'running').length
  }));
  res.json(result);
});

// GET /api/routes/search?from=X&to=Y — Search routes
router.get('/search', (req, res) => {
  const { from, to } = req.query;
  let result = [...db.routes];

  if (from) {
    result = result.filter(r => r.from.toLowerCase().includes(from.toLowerCase()));
  }
  if (to) {
    result = result.filter(r => r.to.toLowerCase().includes(to.toLowerCase()));
  }

  // Attach bus count
  result = result.map(route => ({
    ...route,
    activeBuses: db.buses.filter(b => b.routeId === route.id && b.status === 'running').length,
    busesOnRoute: db.buses.filter(b => b.routeId === route.id).map(b => ({
      id: b.id, name: b.name, type: b.type, status: b.status
    }))
  }));

  res.json(result);
});

// GET /api/routes/:id — Get route details
router.get('/:id', (req, res) => {
  const route = db.routes.find(r => r.id === req.params.id);
  if (!route) return res.status(404).json({ message: 'Route not found' });

  const busesOnRoute = db.buses.filter(b => b.routeId === route.id);
  res.json({ ...route, buses: busesOnRoute });
});

// POST /api/routes — Admin: Add new route
router.post('/', authMiddleware, adminMiddleware, (req, res) => {
  const { routeName, from, to, stops, distance, duration, fare, schedule, polyline } = req.body;

  const newRoute = {
    id: 'r' + Date.now(),
    routeName,
    from,
    to,
    stops: stops || [],
    distance,
    duration,
    fare: fare || { sleeper: 0, ac: 0, nonAc: 0 },
    schedule: schedule || [],
    polyline: polyline || []
  };

  db.routes.push(newRoute);
  res.status(201).json(newRoute);
});

// PUT /api/routes/:id — Admin: Edit route
router.put('/:id', authMiddleware, adminMiddleware, (req, res) => {
  const index = db.routes.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Route not found' });

  db.routes[index] = { ...db.routes[index], ...req.body };
  res.json(db.routes[index]);
});

// DELETE /api/routes/:id — Admin: Delete route
router.delete('/:id', authMiddleware, adminMiddleware, (req, res) => {
  const index = db.routes.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Route not found' });

  db.routes.splice(index, 1);
  res.json({ message: 'Route deleted' });
});

// GET /api/routes/:id/schedule — Get schedule for a route
router.get('/:id/schedule', (req, res) => {
  const route = db.routes.find(r => r.id === req.params.id);
  if (!route) return res.status(404).json({ message: 'Route not found' });

  res.json({
    routeName: route.routeName,
    from: route.from,
    to: route.to,
    schedule: route.schedule,
    stops: route.stops,
    fare: route.fare
  });
});

module.exports = router;
