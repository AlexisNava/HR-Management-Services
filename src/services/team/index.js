/* eslint-disable consistent-return */

const { Router } = require('express');

// Controller
const { getAllTeams, addTeam } = require('./controller');

// Middlewares
const { validateToken, errorHandler } = require('../../middlewares');

// Schema
const { team } = require('./schema');

// Utils
const { writeNewError } = require('../../utils');

const router = Router();

router.get(
  '/',
  validateToken,
  async (req, res, next) => {
    try {
      const { validatedToken } = res;

      const teams = await getAllTeams(validatedToken);

      res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: teams,
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
  async (req, res, next) => {
    const { body, hostname, originalUrl } = req;

    // Destructuring elements from the validated request
    const { value, error } = await team.validate(body);

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
      const response = await addTeam(value);

      return res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: response,
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
