// ============================================================
// Socket.io Real-Time Tracker + Bus Simulator
// ============================================================
const { db } = require('../config/db');

function setupTracker(io) {
  // Track connected clients
  const connectedClients = new Map();

  io.on('connection', (socket) => {
    console.log(`🔌 Client connected: ${socket.id}`);

    // Client wants to track a specific bus
    socket.on('track:bus', (busId) => {
      socket.join(`bus_${busId}`);
      console.log(`👀 Client ${socket.id} tracking bus ${busId}`);
      
      // Send current location immediately
      const bus = db.buses.find(b => b.id === busId);
      if (bus) {
        socket.emit('bus:location', {
          busId: bus.id,
          location: bus.currentLocation,
          status: bus.status
        });
      }
    });

    // Client stops tracking
    socket.on('untrack:bus', (busId) => {
      socket.leave(`bus_${busId}`);
    });

    // Driver updates location
    socket.on('driver:update-location', (data) => {
      const { busId, lat, lng } = data;
      const bus = db.buses.find(b => b.id === busId);
      if (bus) {
        bus.currentLocation = { lat, lng };
        bus.status = 'running';
        bus.lastDriverUpdate = Date.now();
        bus.isSimulated = false;
        
        // Broadcast to all tracking passengers
        io.to(`bus_${busId}`).emit('bus:location', {
          busId,
          location: { lat, lng },
          status: 'running',
          isSimulated: false
        });
      }
    });

    // Get all bus locations (for map overview)
    socket.on('get:all-buses', () => {
      const busLocations = db.buses.map(bus => {
        const route = db.routes.find(r => r.id === bus.routeId);
        return {
          busId: bus.id,
          busNumber: bus.busNumber,
          name: bus.name,
          type: bus.type,
          location: bus.currentLocation,
          status: bus.status,
          isSimulated: bus.isSimulated !== false,
          route: route ? { from: route.from, to: route.to, routeName: route.routeName } : null
        };
      });
      socket.emit('all:bus-locations', busLocations);
    });

    socket.on('disconnect', () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });

  // ============================================================
  // BUS SIMULATOR — Moves buses along routes automatically
  // ============================================================
  function simulateBusMovement() {
    db.buses.forEach(bus => {
      if (bus.status !== 'running') return;

      // Skip simulating if a real driver is actively updating (within the last 15 seconds)
      if (bus.lastDriverUpdate && Date.now() - bus.lastDriverUpdate < 15000) {
        return;
      }
      
      bus.isSimulated = true;

      const route = db.routes.find(r => r.id === bus.routeId);
      if (!route || !route.polyline || route.polyline.length < 2) return;

      const polyline = route.polyline;
      const currentLat = bus.currentLocation.lat;
      const currentLng = bus.currentLocation.lng;

      // Find nearest segment on route
      let nearestIdx = 0;
      let minDist = Infinity;
      for (let i = 0; i < polyline.length; i++) {
        const dist = Math.sqrt(
          Math.pow(polyline[i][0] - currentLat, 2) +
          Math.pow(polyline[i][1] - currentLng, 2)
        );
        if (dist < minDist) {
          minDist = dist;
          nearestIdx = i;
        }
      }

      // Move toward next point
      let nextIdx = nearestIdx + 1;
      if (nextIdx >= polyline.length) {
        // Reverse direction — go back
        nextIdx = 0;
      }

      const targetLat = polyline[nextIdx][0];
      const targetLng = polyline[nextIdx][1];

      // Move 2-5% toward target (simulates speed variance)
      const speed = 0.02 + Math.random() * 0.03;
      const newLat = currentLat + (targetLat - currentLat) * speed;
      const newLng = currentLng + (targetLng - currentLng) * speed;

      // Add small random offset to simulate real GPS
      const jitter = 0.0005;
      bus.currentLocation = {
        lat: newLat + (Math.random() - 0.5) * jitter,
        lng: newLng + (Math.random() - 0.5) * jitter
      };

      // Broadcast update
      io.to(`bus_${bus.id}`).emit('bus:location', {
        busId: bus.id,
        location: bus.currentLocation,
        status: bus.status,
        isSimulated: true
      });
    });

    // Also broadcast all bus locations for the overview map
    const busLocations = db.buses.map(bus => {
      const route = db.routes.find(r => r.id === bus.routeId);
      return {
        busId: bus.id,
        busNumber: bus.busNumber,
        name: bus.name,
        type: bus.type,
        location: bus.currentLocation,
        status: bus.status,
        isSimulated: bus.isSimulated !== false,
        route: route ? { from: route.from, to: route.to, routeName: route.routeName } : null
      };
    });
    io.emit('all:bus-locations', busLocations);
  }

  // Run simulation every 3 seconds — store interval on io for possible cleanup
  io._simInterval = setInterval(simulateBusMovement, 3000);
  console.log('🚌 Bus simulator started (updates every 3s)');
}

module.exports = { setupTracker };
