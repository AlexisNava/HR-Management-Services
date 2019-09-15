const { Router } = require('express');

// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

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

router.post('/register-admin', async (req, res) => {});

module.exports = router;
