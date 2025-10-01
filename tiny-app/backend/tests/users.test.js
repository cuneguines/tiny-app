const request = require('supertest');
const app = require('../index');

describe('Users API', () => {
  it('GET /users returns 200', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
