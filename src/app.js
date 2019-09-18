/* eslint-disable consistent-return */

const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');

require('dotenv').config();

// Middlewares
const { root, notFound, errorHandler } = require('./middlewares');

// Services
const AuthServices = require('./services/auth');
const PositionServices = require('./services/position');
const TeamServices = require('./services/team');

const app = express();

app.disable('x-powered-by');

// Use Middlewares
app.use(pino());
app.use(bodyParser.json());

// CORS Congiguration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.get('/', root);
app.use('/api/auth', AuthServices);
app.use('/api/position', PositionServices);
app.use('/api/team', TeamServices);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
