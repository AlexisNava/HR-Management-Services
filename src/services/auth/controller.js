// Prisma Client
const { hash } = require('bcrypt');
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

  // Find user by email and password

  return null;
}

module.exports = {
  registerAdministrator,
  login,
};
