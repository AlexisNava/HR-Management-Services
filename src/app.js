const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
