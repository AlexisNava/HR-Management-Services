// Prisma Client
const { prisma } = require('../../db/generated/prisma-client/index');

async function getAllPositions() {
  const positions = await prisma.positions();

  return positions;
}

async function addPosition(position) {
  const response = await prisma.createPosition(position);

  return response;
}

module.exports = { getAllPositions, addPosition };
