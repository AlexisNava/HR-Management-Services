const { Router } = require('express');

// Schemas
const { admin } = require('./schema');

// Utils
const { writeNewError } = require('../../utils');

const router = Router();

router.post('/login', async (req, res) => {
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

router.post('/register-admin', async (req, res) => {
  const { body, hostname, originalUrl } = req;

  // Destructuring elements from the validated request
  const { value, error } = await admin.validate(body);

  if (error) {
    // Write Error
    writeNewError(
      'Invalid request syntax',
      400,
      `http://${hostname}${originalUrl}`,
    );

    // Send Log
    res.log.info(`Status: 400, Date: ${new Date()}`);

    res.status(400).json({
      statusCode: 400,
      status: 'Bad Request',
      error: true,
      errorMessage: 'Invalid request syntax',
      errorData: error,
    });
  } else {
    res.status(200).json({
      statusCode: 200,
      status: 'OK',
      data: value,
      error: false,
    });
  }
});

module.exports = router;
