const { Router } = require('express');

// Controller
const { addReport, getAllReports } = require('./controller');

// Schema
const { report } = require('./schema');

// Middlewares
const {
  validateToken,
  validateIfIsAdmin,
  errorHandler,
} = require('../../middlewares');

// Utils
const { writeNewError } = require('../../utils');

const router = Router();

router.get(
  '/',
  validateToken,
  async (req, res, next) => {
    const { validatedToken } = res;

    try {
      const response = await getAllReports(validatedToken);

      return res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: response,
        error: false,
      });
    } catch (error) {
      return next(error);
    }
  },
  errorHandler,
);

router.post(
  '/',
  validateToken,
  validateIfIsAdmin,
  async (req, res, next) => {
    const { body, hostname, originalUrl } = req;

    // Destructuring elements from the validated request
    const { value, error } = await report.validate(body);

    if (error) {
      // Write Error
      writeNewError(
        'Invalid request syntax',
        400,
        `http://${hostname}${originalUrl}`,
      );

      // Send Log
      res.log.info(`Status: 400, Date: ${new Date()}`);

      return res.status(400).json({
        statusCode: 400,
        status: 'Bad Request',
        error: true,
        errorMessage: 'Invalid request syntax',
        errorData: error,
      });
    }

    try {
      const response = await addReport(value);

      return res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: response,
        error: false,
      });
    } catch (e) {
      return next(e);
    }
  },
  errorHandler,
);

module.exports = router;
