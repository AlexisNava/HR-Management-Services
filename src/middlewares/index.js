require('dotenv').config();
const { verify } = require('jsonwebtoken');

// Utils
const { writeNewError } = require('../utils');

function root(req, res) {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    message: 'HR Management Services is running',
    error: false,
  });
}

function notFound(req, res) {
  const { hostname, originalUrl } = req;

  // Write error
  writeNewError(
    `The resource http://${hostname}${originalUrl} was not found`,
    404,
    `http://${hostname}${originalUrl}`,
  );

  // Send Log
  res.log.info(`Status: 404, Date: ${new Date()}`);

  res.status(404).json({
    statusCode: 404,
    status: 'Not Found',
    data: null,
    errorMessage: `The resource http://${hostname}${originalUrl} was not found`,
    error: true,
  });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  const { hostname, originalUrl } = req;

  const statusCode = error.statusCode || 500;
  const status = error.status || 'Internal Server Error';
  const errorMessage = error.message || error;
  const data = error.data || null;

  // Write error
  writeNewError(
    `The resource http://${hostname}${originalUrl} was not found`,
    404,
    `http://${hostname}${originalUrl}`,
  );

  // Send Log
  res.log.info(`Status: 500, Date: ${new Date()}`);

  res.status(statusCode).json({
    statusCode,
    status,
    data,
    errorMessage,
    error: true,
  });
}

// eslint-disable-next-line consistent-return
async function validateToken(req, res, next) {
  const { hostname, originalUrl, headers } = req;
  const { authorization } = headers;

  // Write error
  writeNewError(
    `The resource http://${hostname}${originalUrl} needs token to continue`,
    401,
    `http://${hostname}${originalUrl}`,
  );

  // Send Log
  res.log.info(`Status: 401, Date: ${new Date()}`);

  if (!authorization) {
    return res.status(401).json({
      statusCode: 401,
      status: 'Unauthorized',
      data: null,
      error: true,
      errorMessage: 'Authorization header is empty',
    });
  }

  try {
    const token = authorization.split(' ')[1];
    const validatedToken = await verify(token, process.env.JWT_KEY);
    res.validatedToken = validatedToken;

    next();
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      status: 'Internal Server Error',
      error: true,
      errorMessage: error.message || error,
    });
  }
}

module.exports = { root, notFound, errorHandler, validateToken };
