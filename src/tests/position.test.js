const request = require('supertest');

// Prisma Client
const { prisma } = require('../db/generated/prisma-client');

// Express App
const app = require('../app');

describe('Position', () => {
  it('GET api/position/ should responds Unauthorized when the request doest have jwt token', async () => {
    const { statusCode, body } = await request(app).get('/api/position');

    expect(statusCode).toBe(401);
    expect(body).toEqual({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  });

  it('GET api/position/ should responds OK when the request have jwt token', async () => {
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
      .get('/api/position')
      .set('Authorization', `Bearer ${token}`);

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('statusCode', 200);
    expect(body).toHaveProperty('status', 'OK');
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('error', false);
  });

  it('POST /api/position/ should responds Unauthorized when the request doesnt have jwt token', async () => {
    const { statusCode, body } = await request(app)
      .post('/api/position')
      .set('Accept', 'application/json');

    expect(statusCode).toBe(401);
    expect(body).toEqual({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  });

  it('POST /api/position should responds Bad Request when the body doesnt have the same structure that the position schema', async () => {
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
      .post('/api/position')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .send({ name: 'Software Developer', members: [] });

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('statusCode', 400);
    expect(body).toHaveProperty('status', 'Bad Request');
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage', 'Invalid request syntax');
    expect(body).toHaveProperty('errorData');
  });

  it('POST /api/position should responds OK when the request has jwt and has a new position', async () => {
    // Find position by name
    const foundPosition = await prisma.position({ name: 'Accountant' });

    if (foundPosition) {
      // Delete position by name
      await prisma.deletePosition({ id: foundPosition.id });
    }

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
      .post('/api/position')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .send({ name: 'Accountant' });

    expect(statusCode).toBe(200);
    expect(body).toEqual({
      statusCode: 200,
      status: 'OK',
      data: null,
      error: false,
    });
  });
});
