/* eslint-disable camelcase */
Object.defineProperty(exports, '__esModule', { value: true });
const prisma_lib_1 = require('prisma-client-lib');
const { typeDefs } = require('./prisma-schema');

const models = [
  {
    name: 'User',
    embedded: false,
  },
  {
    name: 'Administrator',
    embedded: false,
  },
  {
    name: 'Team',
    embedded: false,
  },
  {
    name: 'Position',
    embedded: false,
  },
  {
    name: 'Employee',
    embedded: false,
  },
  {
    name: 'Report',
    embedded: false,
  },
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
});
exports.prisma = new exports.Prisma();
