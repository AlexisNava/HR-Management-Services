// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function getEmployeesByTeamID(teamID) {
  // Verify team
  const foundTeam = await prisma.team({ id: teamID });

  if (foundTeam) {
    const employees = await prisma.employees({ where: { team: teamID } });
    const getUsersInfo = await employees.map(async employee => {
      const user = await prisma.user({ id: employee.user });

      return {
        employeeID: employee.id,
        team: employee.team,
        position: employee.position,
        userID: employee.user,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        mothersName: user.mothersName,
      };
    });
    const users = await Promise.all(getUsersInfo);

    return users;
  }

  const error = new Error(`Not Found team with the id: ${teamID}`);

  throw error;
}

module.exports = { getEmployeesByTeamID };
