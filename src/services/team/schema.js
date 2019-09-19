const joi = require('@hapi/joi');

const team = joi
  .object({
    name: joi.string().required(),
  })
  .required();

module.exports = { team };
