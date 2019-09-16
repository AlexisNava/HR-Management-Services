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

const employee = joi
  .object({
    team: joi.string().required(),
    position: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    name: joi.string().required(),
    lastName: joi.string().required(),
    mothersName: joi.string(),
    phoneNumber: joi.string(),
  })
  .required();

module.exports = {
  admin,
  user,
  employee,
};
