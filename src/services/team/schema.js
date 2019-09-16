const joi = require('@hapi/joi');

const team = joi
  .object({
    admin: joi.string().required(),
    name: joi.string().required(),
  })
  .required();

module.exports = { team };
