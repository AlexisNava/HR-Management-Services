// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getAllTeamsEmployees(validatedToken) {
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
      const users = await prisma.users();
      const positions = await prisma.positions();

      if (Array.isArray(teams)) {
        const getEmployeesByTeam = await teams.map(async team => {
          const employeesInfo = await prisma.employees({
            where: { team: team.id },
          });

          const employees = employeesInfo.map(employee => {
            const coresspondingUser = users.find(
              usr => usr.id === employee.user,
            );

            return {
              ...employee,
              position: positions.find(pst => pst.id === employee.position)
                .name,
              name: coresspondingUser.name,
              isAdmin: coresspondingUser.isAdmin,
              phoneNumber: coresspondingUser.phoneNumber,
              email: coresspondingUser.email,
              lastName: coresspondingUser.lastName,
              id: coresspondingUser.id,
              mothersName: coresspondingUser.mothersName,
            };
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

      return teams;
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
  getAllTeamsEmployees,
  addTeam,
  getAllTeams,
};
