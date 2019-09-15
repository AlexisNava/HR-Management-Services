const joi = require('@hapi/joi');

const admin = joi
  .object({
    password: joi.string().required(),
    personalInformation: joi
      .object({
        email: joi.string().required(),
        names: joi.string().required(),
        lastName: joi.string().required(),
        mothersName: joi.string(),
        phoneNumber: joi.number(),
      })
      .required(),
  })
  .required();

module.exports = {
  admin,
};
