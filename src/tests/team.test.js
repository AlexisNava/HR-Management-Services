const request = require('supertest');

// Express App
const app = require('../app');

describe('Team', () => {
  it('GET /api/team/ should reponds Unauthorized when the request doesnt have the Authorization header', async () => {
    const { statusCode, body } = await request(app).get('/api/team');

    expect(statusCode).toBe(401);
    expect(body).toEqual({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  });

  it('GET /api/team/ should reponds OK when the request have the Authorization header', async () => {
    // Create User
    await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'elon.musk@gmail.com',
        password: `elon12345`,
        name: 'Elon',
        lastName: 'Musk',
      })
      .set('Accept', 'application/json');

    // Log In
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'elon.musk@gmail.com',
        password: 'elon12345',
      })
      .set('Accept', 'application/json');

    const token = response.body.data.token || '';

    const { statusCode, body } = await request(app)
      .get('/api/team')
      .set('Authorization', `Bearer ${token}`);

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('statusCode', 200);
    expect(body).toHaveProperty('status', 'OK');
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('error', false);
  });
});
