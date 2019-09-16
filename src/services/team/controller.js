// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeams(validatedToken) {
  const { id } = validatedToken;

  const response = await prisma.administrator({ id }).teams();

  return response;
}

module.exports = {
  getAllTeams,
};
