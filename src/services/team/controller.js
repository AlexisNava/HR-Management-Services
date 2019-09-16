// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeams() {
  const response = await prisma.administrator().teams();

  return response;
}

module.exports = {
  getAllTeams,
};
