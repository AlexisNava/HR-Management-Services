// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeams(validatedToken) {
  const { id } = validatedToken;

  // Find User
  const user = prisma.user({ id });

  if (user) {
    // Find Admin
    const administrator = prisma.administrator({ user: user.id });

    if (administrator) {
      const response = await prisma.teams({
        where: { admin: administrator.id },
      });

      return response;
    }

    const error = new Error('Not Found administrator');
    error.statusCode = 404;
    error.status = 'Not Found';

    throw error;
  }

  const error = new Error('Not Found user');
  error.statusCode = 404;
  error.status = 'Not Found';

  throw error;
}

async function addTeam(team) {
  const { name, admin } = team;

  // Validate admin
  const foundAdministrator = await prisma.administrator({ id: admin });

  if (foundAdministrator) {
    const response = await prisma.createTeam({
      name,
      admin,
    });

    return response;
  }

  const error = new Error(`Not Found an administrator with the id: ${admin}`);
  error.statusCode = 409;
  error.status = 'Conflict';

  throw error;
}

module.exports = {
  getAllTeams,
  addTeam,
};
