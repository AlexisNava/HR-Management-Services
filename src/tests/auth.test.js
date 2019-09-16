const request = require('supertest');
const { prisma } = require('../db/generated/prisma-client');

// Express App
const app = require('../app');

describe('Auth', () => {
  it('POST /api/auth/register-admin should responds Bad Request when the body doesnt have the same structure that the admin schema', async () => {
    const { statusCode, body } = await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'elon.musk@gmail.com',
        password: 'AdminPassword12345',
        name: 'Elon',
        lastName: 'Musk',
        newKey: 1,
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('statusCode', 400);
    expect(body).toHaveProperty('status', 'Bad Request');
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage', 'Invalid request syntax');
    expect(body).toHaveProperty('errorData');
  });

  it('POST /api/auth/register-admin should responds OK', async () => {
    // Delete User
    const foundUser = await prisma.user({ email: 'elon.musk@gmail.com' });
    const foundAdministrator = await prisma
      .user({ email: 'elon.musk@gmail.com' })
      .administrator();

    if (foundUser) {
      await prisma.deleteAdministrator({ id: foundAdministrator.id });
      await prisma.deleteUser({ id: foundUser.id });
    }

    const { statusCode, body } = await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'elon.musk@gmail.com',
        password: `elon12345`,
        name: 'Elon',
        lastName: 'Musk',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('statusCode', 200);
    expect(body).toHaveProperty('status', 'OK');
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('error', false);
  });

  it('POST /api/auth/register-admin should responds Conflic when trying to register a new user with the same email of the registered user', async () => {
    // Registter
    await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'elon.musk@gmail.com',
        password: `elon12345`,
        name: 'Elon',
        lastName: 'Musk',
      })
      .set('Accept', 'application/json');

    // Register again
    const { statusCode, body } = await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'elon.musk@gmail.com',
        password: `elon12345`,
        name: 'Elon',
        lastName: 'Musk',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(409);
    expect(body).toHaveProperty('statusCode', 409);
    expect(body).toHaveProperty('status', 'Conflict');
    expect(body).toHaveProperty('data', null);
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage');
  });

  it('POST /api/auth/login should responds OK when the email and password are correct', async () => {
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

    const { statusCode, body } = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'elon.musk@gmail.com',
        password: 'elon12345',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('statusCode', 200);
    expect(body).toHaveProperty('status', 'OK');
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('error', false);
    expect(body.data).toHaveProperty('token');
  });

  it('POST /api/auth/login should responds Bad Request when Bad Request when the body doesnt have the same structure that the user schema', async () => {
    const { statusCode, body } = await request(app)
      .post('/api/auth/login')
      .send({
        emai: 'elon.musk@gmail.com',
        password: 'elon12345',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('statusCode', 400);
    expect(body).toHaveProperty('status', 'Bad Request');
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage', 'Invalid request syntax');
    expect(body).toHaveProperty('errorData');
  });
});
