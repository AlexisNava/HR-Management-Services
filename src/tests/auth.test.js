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
    const foundAdministrator = await prisma.administrator({
      user: foundUser.id,
    });

    if (foundUser && foundAdministrator) {
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
    expect(body.data).toHaveProperty('userInformation');
    expect(body.data.userInformation).toHaveProperty('id');
    expect(body.data.userInformation).toHaveProperty('email');
    expect(body.data.userInformation).toHaveProperty('name');
    expect(body.data.userInformation).toHaveProperty('lastName');
    expect(body.data.userInformation).toHaveProperty('mothersName');
    expect(body.data.userInformation).toHaveProperty('isAdmin');
  });

  it('POST /api/auth/login should responds Bad Request when the body doesnt have the same structure that the user schema', async () => {
    // Create User
    await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'jeff.bezos@gmail.com',
        password: 'AdminPassword12345',
        name: 'Jeff',
        lastName: 'Bezos',
      })
      .set('Accept', 'application/json');

    const { statusCode, body } = await request(app)
      .post('/api/auth/login')
      .send({
        emai: 'jeff.bezos@gmai.com',
        password: 'AdminPassword12345',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('statusCode', 400);
    expect(body).toHaveProperty('status', 'Bad Request');
    expect(body).toHaveProperty('error', true);
    expect(body).toHaveProperty('errorMessage', 'Invalid request syntax');
    expect(body).toHaveProperty('errorData');
  });

  it('POST /api/auth/login should responds Not Found when the email is wrong', async () => {
    // Create User
    await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'jeff.bezos@gmail.com',
        password: 'AdminPassword12345',
        name: 'Jeff',
        lastName: 'Bezos',
      })
      .set('Accept', 'application/json');

    const { statusCode, body } = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'jeff.bezos@gmai.com',
        password: 'AdminPassword12345',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(404);
    expect(body).toEqual({
      statusCode: 404,
      status: 'Not Found',
      data: null,
      errorMessage: 'Not Found User',
      error: true,
    });
  });

  it('POST /api/auth/login should responds Conflict when the password is wrong', async () => {
    // Create User
    await request(app)
      .post('/api/auth/register-admin')
      .send({
        email: 'jeff.bezos@gmail.com',
        password: 'AdminPassword12345',
        name: 'Jeff',
        lastName: 'Bezos',
      })
      .set('Accept', 'application/json');

    const { statusCode, body } = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'jeff.bezos@gmail.com',
        password: 'AdminPassword1234',
      })
      .set('Accept', 'application/json');

    expect(statusCode).toBe(409);
    expect(body).toEqual({
      statusCode: 409,
      status: 'Conflict',
      data: null,
      errorMessage: 'The password is incorrect',
      error: true,
    });
  });
});
