// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getEmployeesByTeamID(teamID) {
  // Verify team
  const foundTeam = prisma.team({ id: teamID });

  if (foundTeam) {
    const employees = prisma.employees({ team: teamID });

    return employees;
  }

  const error = new Error(`Not Found team with the id: ${teamID}`);
  error.statusCode = 400;
  error.status = 'Not Found';

  throw error;
}

module.exports = { getEmployeesByTeamID };
