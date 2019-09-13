const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger');

require('dotenv').config();

// Config
const { hrManagementServicesDB } = require('./config/dbConnection');

// Middlewares
const { root, notFound, errorHandler } = require('./middlewares');

const app = express();

// Use Middlewares
app.use(pino());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Test DB Connection
hrManagementServicesDB
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error.message || error);
  });

app.get('/', root);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
