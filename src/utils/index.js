const { writeFileSync, appendFileSync } = require('fs');
const shortid = require('shortid');

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
 *
 * @param {String} message - Error.message
 * @param {Number} status - Status Code
 * @param {String} requestedURL - http://${req.hostname}${req.originalUrl}
 * @param {String} filename - File Name
 */
function writeNewError(message, status, requestedURL, filename = 'errors.txt') {
  const errorMessage = `${shortid.generate()} ${status} ${requestedURL}: ${message} | ${new Date()}\n\n`;

  return new Promise((resolve, reject) => {
    try {
      // Create a new file
      appendFileSync(filename, '');

      // Write the error in the file
      writeFileSync(filename, errorMessage);

      resolve();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);

      reject(error);
    }
  });
}

module.exports = { getValueByEnv, writeNewError };
