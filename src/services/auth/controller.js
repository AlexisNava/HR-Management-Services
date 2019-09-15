// Prisma Client
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

  try {
    // Register new Admin
    const response = await prisma.createAdministrator({
      user: {
        password,
        isAdmin: true,
        personalInformation: {
          email,
          names,
          lastName,
          mothersName: mothersName || null,
          phoneNumber: phoneNumber || null,
        },
      },
    });

    console.log('response', response);

    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  registerAdministrator,
};
