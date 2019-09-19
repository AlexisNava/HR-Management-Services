const joi = require('@hapi/joi');

const report = joi
  .object({
    assignedBy: joi.string().required(),
    assignedTo: joi.string().required(),
    arrivalTime: joi.number().required(),
    departureTime: joi.number().required(),
    workingDay: joi.number().required(),
  })
  .required();

module.exports = { report };
