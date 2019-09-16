const { appendFile } = require('fs');
const { generate } = require('shortid');

/**
 * Get the corresponding value per environment
 * IMPORTANT: Will return devValue for development and test environments.
 * @param {*} devValue - Development Value
 * @param {*} prodValue - Production Value
 */
const getValueByEnv = (devValue, prodValue) => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'production') {
    return prodValue;
  }

  return devValue;
};

/**
 * Write a error description in the errors.txt file
 * @param {String} message - Error.message
 * @param {Number} status - Status Code
 * @param {String} requestedURL - http://${req.hostname}${req.originalUrl}
 * @param {String} filename - File Name, by default is errors.txt
 */
function writeNewError(message, status, requestedURL, filename = 'errors.txt') {
  const errorMessage = `${generate()} ${status} ${requestedURL}: ${message} | ${new Date()}\n\n`;

  appendFile(filename, errorMessage, error => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  });
}

module.exports = { getValueByEnv, writeNewError };
