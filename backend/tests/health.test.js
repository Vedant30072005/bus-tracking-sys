// Use an ephemeral port for tests to avoid conflicts with local dev server
process.env.PORT = '0';
const { start, server, io } = require('../server');

beforeAll(async () => {
  await start();
});

afterAll(async () => {
  try {
    // Stop simulator interval if set
    if (io && io._simInterval) clearInterval(io._simInterval);
    server.close();
  } catch (e) {
    // ignore
  }
});

test('GET /api/health returns ok status', async () => {
  const port = server.address().port;
  const res = await fetch(`http://127.0.0.1:${port}/api/health`);
  const body = await res.json();
  expect(res.status).toBe(200);
  expect(body).toHaveProperty('status', 'ok');
});
