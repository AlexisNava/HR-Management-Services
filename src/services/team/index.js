const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    error: false,
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
    error: false,
  });
});

module.exports = router;
