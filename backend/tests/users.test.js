const request = require('supertest');
const app = require('../index');
const pool = require('../db');   // ✅ import the DB pool
describe('Users API', () => {
  it('GET /users returns 200', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });


   afterAll(async () => {
    await pool.end();  // ✅ close MySQL connection pool
  });
});

