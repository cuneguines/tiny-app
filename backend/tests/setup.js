const pool = require('../db');

module.exports = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    )
  `);

  // Insert dummy user
  await pool.query(`INSERT INTO users (name) VALUES ('Test User')`);
};