const { Router } = require('express');

// Middlewares
const { validateToken, errorHandler } = require('../../middlewares');

// Controller
const { getAllPositions } = require('./controller');

const router = Router();

router.get(
  '/',
  validateToken,
  async (req, res, next) => {
    const positions = await getAllPositions();

    try {
      res.status(200).json({
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

router.post('/', validateToken, (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    error: false,
  });
});

module.exports = router;
