const express = require('express');
const cors = require('express');
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
app.use(cors());
app.use(bodyParser.json());

app.get('/', root);
app.use('/api/auth', AuthServices);
app.use('/api/position', PositionServices);
app.use('/api/position', TeamServices);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
