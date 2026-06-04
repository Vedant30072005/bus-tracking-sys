// ============================================================
// In-Memory Database with seed data
// ============================================================
const bcrypt = require('bcryptjs');
const { drivers, routes, buses, defaultUsers } = require('../data/seedData');

const db = {
  users: [],
  buses: [],
  routes: [],
  drivers: []
};

async function initDB() {
  // Seed drivers
  db.drivers = [...drivers];

  // Seed routes
  db.routes = [...routes];

  // Seed buses — attach driver info
  db.buses = buses.map(bus => {
    const driver = db.drivers.find(d => d.id === bus.driverId);
    return { ...bus, driver: driver || null };
  });

  // Seed admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  db.users = [
    {
      id: 'u1',
      name: 'Admin User',
      email: 'admin@whereismybus.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date().toISOString()
    }
  ];

  console.log(`✅ Database seeded: ${db.routes.length} routes, ${db.buses.length} buses, ${db.drivers.length} drivers`);
}

module.exports = { db, initDB };
