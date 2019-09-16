const joi = require('@hapi/joi');

const position = joi
  .object({
    name: joi.string().required(),
  })
  .required();

module.exports = { position };
