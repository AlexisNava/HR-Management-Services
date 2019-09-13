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

module.exports = { getValueByEnv };
