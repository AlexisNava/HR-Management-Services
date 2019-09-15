require('dotenv').config();

const { hash, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

/**
 * Create a new administrator
 * @param {Object} newAdministrator - Administrator Model
 */
async function registerAdministrator(newAdministrator) {
  const {
    email,
    password,
    name,
    lastName,
    mothersName,
    phoneNumber,
  } = newAdministrator;

  // Encrypt Password
  const encryptedPassword = await hash(password, 10);

  // Register new Admin
  const response = await prisma.createAdministrator({
    user: {
      create: {
        email,
        password: encryptedPassword,
        name,
        lastName,
        mothersName: mothersName || null,
        phoneNumber: phoneNumber || null,
        isAdmin: true,
      },
    },
  });

  return response;
}

async function login(user) {
  const { email, password } = user;

  // Find user by email
  const foundUser = await prisma.user({ email });

  if (!foundUser) {
    const error = new Error('Not Found User');
    error.statusCode = 404;
    error.status = 'Not Found';
    throw error;
  } else {
    // Validate password
    const validatedPassword = await compare(password, foundUser.password);

    if (!validatedPassword) {
      const error = new Error('The password is incorrect');
      error.statusCode = 409;
      error.status = 'Conflict';
      throw error;
    }
  }

  const token = sign(
    {
      id: foundUser.id,
      email: foundUser.email,
    },
    process.env.JWT_KEY,
    { expiresIn: '1h' },
  );

  return { token };
}

module.exports = {
  registerAdministrator,
  login,
};
