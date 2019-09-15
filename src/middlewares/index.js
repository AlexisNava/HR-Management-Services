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
    message: `The resource http://${hostname}${originalUrl} was not found`,
    error: true,
  });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  console.log('errorHandler', error);

  const { hostname, originalUrl } = req;

  const statusCode = error.statusCode || 500;
  const status = error.status || 'Internal Server Error';
  const message = error.message || error;
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
    message,
    error: true,
  });
}

module.exports = { root, notFound, errorHandler };
