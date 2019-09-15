// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function registerAdministrator({ password, personalInformation }) {
  // Encrypt Password

  try {
    // Register new Admin
    prisma.createAdministrator({});
  } catch (error) {
    return error;
  }
}

module.exports = {
  registerAdministrator,
};
