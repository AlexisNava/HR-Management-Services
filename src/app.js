const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('dotenv').config();

// Middlewares
const { root, notFound, errorHandler } = require('./middlewares');

const app = express();

const NODE_ENV = process.env.NODE_ENV || 'development';

// Use Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', root);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
