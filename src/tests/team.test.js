const request = require('supertest');

// Prisma Client
const { prisma } = require('../db/generated/prisma-client');

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

  it('POST /api/team/ should responds Unauthorized when the request doenst hace jwt token', async () => {
    const { statusCode, body } = await request(app)
      .post('/api/team/')
      .set('Accept', 'application/json')
      .send({
        admin: 'dadsa',
        name: 'Sales',
      });

    expect(statusCode).toBe(401);
    expect(body).toEqual({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  });

  it('POST /api/team/ should responds Bad Request when the request body doesnt follow the team schema', async () => {
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
      .post('/api/team/')
      .set('Acept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({
        i: 'dsadasdsa',
        name: 'dasdasdsa',
      });

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('statusCode', 400);
    expect(body).toHaveProperty('status', 'Bad Request');
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage', 'Invalid request syntax');
    expect(body).toHaveProperty('errorData');
  });

  it('POST /api/team should responds OK when adds a new team', async () => {
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

    // Fin Human Resources Team
    const team = await prisma.team({ name: 'Human Resources' });

    if (team) {
      // Delete Human Resources team
      await prisma.deleteTeam({ name: 'Human Resources' });
    }

    const { statusCode, body } = await request(app)
      .post('/api/team/')
      .set('Acept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Human Resources' });

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('statusCode', 200);
    expect(body).toHaveProperty('status', 'OK');
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('error', false);
  });

  it('POST /api/team should responds Internal Server Error when trying to add a team with a repeat name', async () => {
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

    // Create Human Resources Team
    await request(app)
      .post('/api/team/')
      .set('Acept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Human Resources' });

    const { statusCode, body } = await request(app)
      .post('/api/team/')
      .set('Acept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Human Resources' });

    expect(statusCode).toBe(500);
    expect(body).toHaveProperty('statusCode', 500);
    expect(body).toHaveProperty('status', 'Internal Server Error');
    expect(body).toHaveProperty('data', null);
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage');
  });
});
