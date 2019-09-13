require('dotenv').config();

const username = process.env.DB_USERNAME;
const developmentPassword = process.env.DB_DEVELOPMENT_PASSWORD;
const testPassword = process.env.DB_DEVELOPMENT_PASSWORD;
const productionPassword = process.env.DB_DEVELOPMENT_PASSWORD;
const developmentName = process.env.DB_DEVELOPMENT_NAME;
const testName = process.env.DB_TEST_NAME;
const productionName = process.env.DB_PRODUCTION_NAME;

module.exports = {
  development: {
    username,
    password: developmentPassword,
    database: developmentName,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username,
    password: testPassword,
    database: testName,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username,
    password: productionPassword,
    database: productionName,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
