// Prisma Client
const { prisma } = require('../../db/generated/prisma-client/index');

async function getAllPositions() {
  const positions = await prisma.positions();

  return positions;
}

module.exports = { getAllPositions };
