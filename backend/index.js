const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/users', usersRouter);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
