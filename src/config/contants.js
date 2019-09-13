// Config
const dbConfiguration = require('./config');

const DEVELOPMENT_DB_URI_CONNECTION = `postgres://${dbConfiguration.development.username}:${dbConfiguration.development.password}@${dbConfiguration.development.host}:5432/${dbConfiguration.development.database}`;
const PRODUCTION_DB_URI_CONNECTION = `postgres://${dbConfiguration.production.username}:${dbConfiguration.production.password}@${dbConfiguration.production.host}:5432/${dbConfiguration.production.database}`;

module.exports = {
  DEVELOPMENT_DB_URI_CONNECTION,
  PRODUCTION_DB_URI_CONNECTION,
};
