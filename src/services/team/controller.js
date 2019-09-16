// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeams(validatedToken) {
  const { id } = validatedToken;

  const response = await prisma.teams({ where: { admin: id } });

  return response;
}

async function addTeam(team) {
  const { name, admin } = team;

  const response = await prisma.createTeam({
    name,
    admin,
  });

  return response;
}

module.exports = {
  getAllTeams,
  addTeam,
};
