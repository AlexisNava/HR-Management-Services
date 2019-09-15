const joi = require('@hapi/joi');

const admin = joi
  .object({
    email: joi.string().required(),
    password: joi.string().required(),
    name: joi.string().required(),
    lastName: joi.string().required(),
    mothersName: joi.string(),
    phoneNumber: joi.number(),
  })
  .required();

const user = joi
  .object({
    email: joi.string().required(),
    password: joi.string().required(),
  })
  .required();

module.exports = {
  admin,
  user,
};
