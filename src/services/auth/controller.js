require('dotenv').config();

const { hash, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

/**
 * Create a new administrator
 * @param {Object} newAdministrator - Administrator Model
 */
async function registerAdministrator(administrator) {
  const {
    email,
    password,
    name,
    lastName,
    mothersName,
    phoneNumber,
  } = administrator;

  // Encrypt Password
  const encryptedPassword = await hash(password, 10);

  // Creat User
  const { id } = await prisma.createUser({
    email,
    password: encryptedPassword,
    name,
    lastName,
    mothersName: mothersName || null,
    phoneNumber: phoneNumber || null,
  });

  // Create Administrator
  const response = await prisma.createAdministrator({ user: id });

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

  return {
    token,
    userInformation: {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      lastName: foundUser.lastName,
      mothersName: foundUser.mothersName,
      isAdmin: foundUser.isAdmin,
    },
  };
}

module.exports = {
  registerAdministrator,
  login,
};
