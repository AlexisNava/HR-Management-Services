/* eslint-disable consistent-return */

const { Router } = require('express');

// Middlewares
const { validateToken, errorHandler } = require('../../middlewares');

// Controller
const { getEmployeesByTeamID } = require('./controller');

const router = Router();

router.get(
  '/:teamId',
  validateToken,
  async (req, res, next) => {
    const { teamId } = req.params;

    try {
      const response = await getEmployeesByTeamID(teamId);

      return res.status(200).json({
        statusCode: 200,
        status: 'OK',
        data: response,
        error: false,
      });
    } catch (error) {
      next(error);
    }
  },
  errorHandler,
);

module.exports = router;
