// ============================================================
// Server — Express + Socket.io
// ============================================================
require('dotenv').config();
const fs = require('fs');
const express = require('express');
const http = require('http');
const https = require('https');
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const Redis = require('ioredis');
const morgan = require('morgan');
const logger = require('./utils/logger');
let Sentry;
if (process.env.SENTRY_DSN) {
  Sentry = require('@sentry/node');
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}
const cors = require('cors');
const { initDB } = require('./config/db');
const { setupTracker } = require('./socket/tracker');

const app = express();

// Create HTTP or HTTPS server based on environment config
let server;
let useHttps = false;
try {
  const keyPath = process.env.SSL_KEY_PATH;
  const certPath = process.env.SSL_CERT_PATH;
  if (keyPath && certPath && fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    const key = fs.readFileSync(keyPath);
    const cert = fs.readFileSync(certPath);
    server = https.createServer({ key, cert }, app);
    useHttps = true;
  }
} catch (e) {
  // fall back to HTTP
}
if (!server) server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});

if (process.env.REDIS_URL) {
  const pubClient = new Redis(process.env.REDIS_URL);
  const subClient = pubClient.duplicate();
  io.adapter(createAdapter(pubClient, subClient));
  
  pubClient.on('error', (err) => logger.error('Redis Pub Client Error: ' + err.message));
  subClient.on('error', (err) => logger.error('Redis Sub Client Error: ' + err.message));
}

// Middleware
app.use(cors());
app.use(express.json());
// Request logging
app.use(morgan('combined', { stream: logger.stream }));

// Initialize Sentry request handler if enabled
if (Sentry) app.use(Sentry.Handlers.requestHandler());

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/buses', require('./routes/busRoutes'));
app.use('/api/routes', require('./routes/routeRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', name: 'Where Is My Bus API', uptime: process.uptime() });
});

// Welcome
app.get('/', (req, res) => {
  res.json({
    name: '🚌 Where Is My Bus — API Server',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth (register, login, me)',
      buses: '/api/buses (list, get, location)',
      routes: '/api/routes (list, search, schedule)',
      health: '/api/health'
    }
  });
});

// Error handler (Sentry + logger)
app.use((err, req, res, next) => {
  logger.error(err.stack || err);
  if (Sentry) Sentry.captureException(err);
  res.status(500).json({ message: 'Internal server error' });
});

// Initialize DB and start server
const PORT = process.env.PORT || 5000;

async function start() {
  await initDB();
  setupTracker(io);
  
  server.listen(PORT, () => {
    const proto = useHttps ? 'https' : 'http';
    console.log('');
    console.log('  🚌 ═══════════════════════════════════════');
    console.log('  🚌  WHERE IS MY BUS — API Server');
    console.log(`  🚌  Running on ${proto}://localhost:${PORT}`);
    console.log('  🚌  Socket.io: Real-time tracking active');
    console.log('  🚌 ═══════════════════════════════════════');
    console.log('');
  });
}

// Only start the server when run directly. This allows tests to import the `app`.
if (require.main === module) {
  start();
}

module.exports = { app, server, io, start };
