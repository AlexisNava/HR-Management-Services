const { Router } = require('express');

// Middlewares
const { validateToken } = require('../../middlewares');

const router = Router();

router.get('/', validateToken, (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    error: false,
  });
});

router.post('/', validateToken, (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    error: false,
  });
});

module.exports = router;
