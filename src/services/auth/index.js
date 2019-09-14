const { Router } = require('express');

const router = Router();

router.post('/login', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
  });
});

router.post('/register', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    status: 'OK',
    data: null,
  });
});

module.exports = router;
