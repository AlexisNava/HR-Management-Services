// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeams(validatedToken) {
  const { id } = validatedToken;

  const response = await prisma.teams({ where: { admin: id } });

  return response;
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
