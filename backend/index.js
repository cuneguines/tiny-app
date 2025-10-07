const express = require('express');
const client = require('prom-client');
const usersRouter = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());
app.use('/users', usersRouter);

// Health check endpoint
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Prometheus metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing or Docker
module.exports = app;
