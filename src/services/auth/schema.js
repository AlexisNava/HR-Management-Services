const joi = require('@hapi/joi');

const admin = joi
  .object({
    password: joi.string().required(),
    isAdmin: joi.boolean(),
    isActive: joi.boolean(),
    personalInformation: joi
      .object({
        email: joi.string().required(),
        names: joi.string().required(),
        lastName: joi.string().required(),
        mothersName: joi.string().required(),
        phoneNumber: joi.number(),
      })
      .required(),
  })
  .required();

module.exports = {
  admin,
};
