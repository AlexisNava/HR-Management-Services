// Prisma Client
const { prisma } = require('../../db/generated/prisma-client');

async function addReport({
  assignedBy,
  assignedTo,
  arrivalTime,
  departureTime,
  workingDay,
}) {
  // Validate admin
  const admin = await prisma.administrator({ id: assignedBy });

  if (admin) {
    const employee = await prisma.employee({ id: assignedTo });

    if (employee) {
      const response = await prisma.createReport({
        assignedBy,
        assignedTo,
        arrivalTime,
        departureTime,
        workingDay,
      });

      return response;
    }

    const error = new Error('Not Found employee');
    error.statusCode = 404;
    error.status = 'Not Found';

    throw error;
  }

  const error = new Error('Not Found admin');
  error.statusCode = 404;
  error.status = 'Not Found';

  throw error;
}

async function getAllReports({ id }) {
  // Find employee by id user
  const employee = await prisma.employee({ user: id });

  if (employee) {
    const reports = await prisma.reports({
      where: { assignedTo: employee.id },
    });
    const formattedReports = await reports.map(async report => {
      const admin = await prisma.administrator({ id: report.assignedBy });
      const user = await prisma.user({ id: admin.user });

      return {
        ...report,
        assignedBy: {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          mothersName: user.mothersName,
          email: user.email,
        },
      };
    });

    const reportsWithUsers = await Promise.all(formattedReports);

    return reportsWithUsers;
  }

  const error = new Error('Not Found employee');
  error.statusCode = 404;
  error.status = 'Not Found';

  throw error;
}

module.exports = { addReport, getAllReports };
