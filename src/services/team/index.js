const { Router } = require('express');

// Controller
const { getAllTeams } = require('./controller');

// Middlewares
const { validateToken, errorHandler } = require('../../middlewares');

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

router.post('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    error: false,
  });
});

module.exports = router;
