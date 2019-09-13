const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('dotenv').config();

// Middlewares
const root = require('./middleware/root');
const notFound = require('./middleware/notFound');
const internalServerError = require('./middleware/internalServerError');

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
app.use(internalServerError);

module.exports = app;
