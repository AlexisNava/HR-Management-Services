// Config
const dbConfiguration = require('../db/config');

const DEVELOPMENT_DB_URI_CONNECTION = `postgres://${dbConfiguration.development.username}:${dbConfiguration.development.password}@${dbConfiguration.development.host}:5432/${dbConfiguration.development.database}`;
const PRODUCTION_DB_URI_CONNECTION = `postgres://${dbConfiguration.production.username}:${dbConfiguration.production.password}@${dbConfiguration.production.host}:5432/${dbConfiguration.production.database}`;
const DB_DEVELOPMENT_CONFIG = dbConfiguration.development;
const DB_PRODUCTION_CONFIG = dbConfiguration.production;

module.exports = {
  DEVELOPMENT_DB_URI_CONNECTION,
  PRODUCTION_DB_URI_CONNECTION,
  DB_DEVELOPMENT_CONFIG,
  DB_PRODUCTION_CONFIG,
};
