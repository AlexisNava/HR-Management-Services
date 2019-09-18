// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeams(validatedToken) {
  const { id } = validatedToken;

  // Find User
  const user = await prisma.user({ id });

  if (user) {
    // Find Admin
    const administrator = await prisma.administrator({ user: user.id });

    if (administrator) {
      // Get all the teams of the administrator
      const teams = await prisma.teams({
        where: { admin: administrator.id },
      });

      if (Array.isArray(teams)) {
        const getEmployeesByTeam = await teams.map(async team => {
          const employees = await prisma.employees({
            where: { team: team.id },
          });

          return {
            id: team.id,
            name: team.name,
            employees,
          };
        });

        const employeesByTeam = await Promise.all(getEmployeesByTeam);

        return employeesByTeam;
      }
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

async function addTeam(team, validatedToken) {
  const { id } = validatedToken;
  const { name } = team;

  // Find User
  const user = await prisma.user({ id });

  if (user) {
    // Find Admin
    const administrator = await prisma.administrator({ user: user.id });

    if (administrator) {
      const response = await prisma.createTeam({
        admin: administrator.id,
        name,
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

module.exports = {
  getAllTeams,
  addTeam,
};
