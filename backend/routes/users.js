const express = require('express');
const router = express.Router();
const pool = require('../db');

//Create user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const [result] = await pool.query('INSERT INTO users(name,email) VALUES (?,?)', [name, email]);
  res.json({ id: result.insertId, name, email });
});

// List users
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
});

module.exports = router;
