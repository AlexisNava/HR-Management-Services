const { Router } = require('express');

// Middlewares
const {
  validateToken,
  validateIfIsAdmin,
  errorHandler,
} = require('../../middlewares');

const router = Router();

router.get(
  '/',
  validateToken,
  (req, res, next) => {
    return res.status(200).json({
      statusCode: 200,
      status: 'OK',
      data: null,
      error: false,
    });
  },
  errorHandler,
);

router.post(
  '/',
  validateToken,
  validateIfIsAdmin,
  (req, res, next) => {
    return res.status(200).json({
      statusCode: 200,
      status: 'OK',
      data: null,
      error: false,
    });
  },
  errorHandler,
);

module.exports = router;
