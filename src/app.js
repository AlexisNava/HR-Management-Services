const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');

require('dotenv').config();

// Middlewares
const { root, notFound, errorHandler } = require('./middlewares');

// Services
const AuthServices = require('./services/auth');

const app = express();

// Use Middlewares
app.use(pino());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', root);
app.use('/api/auth', AuthServices);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
