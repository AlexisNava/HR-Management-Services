// Prisma Client
const { hash } = require('bcrypt');
const { prisma } = require('../../db/generated/prisma-client');

/**
 * Create a new administrator
 * @param {Object} newAdministrator - Administrator Model
 */
async function registerAdministrator(newAdministrator) {
  const { password } = newAdministrator;
  const {
    email,
    names,
    lastName,
    mothersName,
    phoneNumber,
  } = newAdministrator.personalInformation;

  // Encrypt Password
  const encryptedPassword = await hash(password, 10);

  // Register new Admin
  const response = await prisma.createAdministrator({
    user: {
      create: {
        password: encryptedPassword,
        isAdmin: true,
        personalInformation: {
          create: {
            email,
            names,
            lastName,
            mothersName: mothersName || null,
            phoneNumber: phoneNumber || null,
          },
        },
      },
    },
  });

  return response;
}

async function login(user) {
  const { email, password } = user;
}

module.exports = {
  registerAdministrator,
  login,
};
