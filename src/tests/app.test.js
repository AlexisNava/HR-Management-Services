const request = require('supertest');

// Express App
const app = require('../app');

describe('App', () => {
  it('GET / should responds OK status', async () => {
    const { statusCode, body } = await request(app).get('/');

    expect(statusCode).toBe(200);
    expect(body).toEqual({
      statusCode: 200,
      status: 'OK',
      data: null,
      message: 'HR Management Services is running',
      error: false,
    });
  });

  it('GET /a should respond Not Found status', async () => {
    const { statusCode, body } = await request(app).get('/a');

    expect(statusCode).toBe(404);
    expect(body).toEqual({
      statusCode: 404,
      status: 'Not Found',
      data: null,
      errorMessage: 'The resource http://127.0.0.1/a was not found',
      error: true,
    });
  });
});
