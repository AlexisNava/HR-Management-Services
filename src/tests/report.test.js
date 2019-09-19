const request = require('supertest');

// Express App
const app = require('../app');

describe('Report', () => {
  it('POST /api/report should responds Unauthorized when the request doesnt have the Authorization header', async () => {
    const { statusCode, body } = await request(app).post('/api/report');

    expect(statusCode).toBe(401);
    expect(body).toEqual({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  });

  it('POST /api/report should responds Bad Request when the resques body doesnt follow the report schema', async () => {
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
      .post('/api/report')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .send({
        assignedBy: 'ck0pv3a2o02z00737c569u3pg',
        assignedTo: 'ck0pvd75f03640737muzinfas',
        arrivalTime: 10,
        departureTime: 18,
        workingDay: 8,
        bonus: 10,
      });

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('statusCode', 400);
    expect(body).toHaveProperty('status', 'Bad Request');
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage', 'Invalid request syntax');
    expect(body).toHaveProperty('errorData');
  });

  it('GET /api/report should responds Unauthorized when the request doesnt have the Authorization header', async () => {
    const { statusCode, body } = await request(app).get('/api/report');

    expect(statusCode).toBe(401);
    expect(body).toEqual({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  });
});
