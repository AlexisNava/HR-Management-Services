const Sequelize = require('sequelize');

// Constants
const {
  DEVELOPMENT_DB_URI_CONNECTION,
  PRODUCTION_DB_URI_CONNECTION,
} = require('./contants');

// Utils
const { getValueByEnv } = require('../utils');

const dbURI = getValueByEnv(
  DEVELOPMENT_DB_URI_CONNECTION,
  PRODUCTION_DB_URI_CONNECTION,
);

const hrManagementServicesDB = new Sequelize(dbURI);

module.exports = {
  hrManagementServicesDB,
};
