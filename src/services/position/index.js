/* eslint-disable consistent-return */

const { Router } = require('express');

// Middlewares
const {
  validateToken,
  errorHandler,
  validateIfIsAdmin,
} = require('../../middlewares');

// Controller
const { getAllPositions, addPosition } = require('./controller');

// Schemas
const { position } = require('./schema');

// Utils
const { writeNewError } = require('../../utils');

const router = Router();

router.get(
  '/',
  validateToken,
  validateIfIsAdmin,
  async (req, res, next) => {
    const positions = await getAllPositions();

    try {
      return res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: positions,
        error: false,
      });
    } catch (error) {
      next(error);
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
    const { value, error } = await position.validate(body);

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
      await addPosition(value);

      return res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: null,
        error: false,
      });
    } catch (e) {
      e.statusCode = 409;
      e.status = 'Conflict';

      next(e);
    }
  },
  errorHandler,
);

module.exports = router;
