module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Administrator {
  id: ID!
  user: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AdministratorConnection {
  pageInfo: PageInfo!
  edges: [AdministratorEdge]!
  aggregate: AggregateAdministrator!
}

input AdministratorCreateInput {
  id: ID
  user: String!
}

type AdministratorEdge {
  node: Administrator!
  cursor: String!
}

enum AdministratorOrderByInput {
  id_ASC
  id_DESC
  user_ASC
  user_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdministratorPreviousValues {
  id: ID!
  user: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AdministratorSubscriptionPayload {
  mutation: MutationType!
  node: Administrator
  updatedFields: [String!]
  previousValues: AdministratorPreviousValues
}

input AdministratorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdministratorWhereInput
  AND: [AdministratorSubscriptionWhereInput!]
  OR: [AdministratorSubscriptionWhereInput!]
  NOT: [AdministratorSubscriptionWhereInput!]
}

input AdministratorUpdateInput {
  user: String
}

input AdministratorUpdateManyMutationInput {
  user: String
}

input AdministratorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: String
  user_not: String
  user_in: [String!]
  user_not_in: [String!]
  user_lt: String
  user_lte: String
  user_gt: String
  user_gte: String
  user_contains: String
  user_not_contains: String
  user_starts_with: String
  user_not_starts_with: String
  user_ends_with: String
  user_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AdministratorWhereInput!]
  OR: [AdministratorWhereInput!]
  NOT: [AdministratorWhereInput!]
}

input AdministratorWhereUniqueInput {
  id: ID
  user: String
}

type AggregateAdministrator {
  count: Int!
}

type AggregateEmployee {
  count: Int!
}

type AggregatePosition {
  count: Int!
}

type AggregateReport {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Employee {
  id: ID!
  user: String!
  team: String!
  position: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type EmployeeConnection {
  pageInfo: PageInfo!
  edges: [EmployeeEdge]!
  aggregate: AggregateEmployee!
}

input EmployeeCreateInput {
  id: ID
  user: String!
  team: String!
  position: String!
}

type EmployeeEdge {
  node: Employee!
  cursor: String!
}

enum EmployeeOrderByInput {
  id_ASC
  id_DESC
  user_ASC
  user_DESC
  team_ASC
  team_DESC
  position_ASC
  position_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EmployeePreviousValues {
  id: ID!
  user: String!
  team: String!
  position: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type EmployeeSubscriptionPayload {
  mutation: MutationType!
  node: Employee
  updatedFields: [String!]
  previousValues: EmployeePreviousValues
}

input EmployeeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmployeeWhereInput
  AND: [EmployeeSubscriptionWhereInput!]
  OR: [EmployeeSubscriptionWhereInput!]
  NOT: [EmployeeSubscriptionWhereInput!]
}

input EmployeeUpdateInput {
  user: String
  team: String
  position: String
}

input EmployeeUpdateManyMutationInput {
  user: String
  team: String
  position: String
}

input EmployeeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: String
  user_not: String
  user_in: [String!]
  user_not_in: [String!]
  user_lt: String
  user_lte: String
  user_gt: String
  user_gte: String
  user_contains: String
  user_not_contains: String
  user_starts_with: String
  user_not_starts_with: String
  user_ends_with: String
  user_not_ends_with: String
  team: String
  team_not: String
  team_in: [String!]
  team_not_in: [String!]
  team_lt: String
  team_lte: String
  team_gt: String
  team_gte: String
  team_contains: String
  team_not_contains: String
  team_starts_with: String
  team_not_starts_with: String
  team_ends_with: String
  team_not_ends_with: String
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [EmployeeWhereInput!]
  OR: [EmployeeWhereInput!]
  NOT: [EmployeeWhereInput!]
}

input EmployeeWhereUniqueInput {
  id: ID
  user: String
}

scalar Long

type Mutation {
  createAdministrator(data: AdministratorCreateInput!): Administrator!
  updateAdministrator(data: AdministratorUpdateInput!, where: AdministratorWhereUniqueInput!): Administrator
  updateManyAdministrators(data: AdministratorUpdateManyMutationInput!, where: AdministratorWhereInput): BatchPayload!
  upsertAdministrator(where: AdministratorWhereUniqueInput!, create: AdministratorCreateInput!, update: AdministratorUpdateInput!): Administrator!
  deleteAdministrator(where: AdministratorWhereUniqueInput!): Administrator
  deleteManyAdministrators(where: AdministratorWhereInput): BatchPayload!
  createEmployee(data: EmployeeCreateInput!): Employee!
  updateEmployee(data: EmployeeUpdateInput!, where: EmployeeWhereUniqueInput!): Employee
  updateManyEmployees(data: EmployeeUpdateManyMutationInput!, where: EmployeeWhereInput): BatchPayload!
  upsertEmployee(where: EmployeeWhereUniqueInput!, create: EmployeeCreateInput!, update: EmployeeUpdateInput!): Employee!
  deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
  deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
  createPosition(data: PositionCreateInput!): Position!
  updatePosition(data: PositionUpdateInput!, where: PositionWhereUniqueInput!): Position
  updateManyPositions(data: PositionUpdateManyMutationInput!, where: PositionWhereInput): BatchPayload!
  upsertPosition(where: PositionWhereUniqueInput!, create: PositionCreateInput!, update: PositionUpdateInput!): Position!
  deletePosition(where: PositionWhereUniqueInput!): Position
  deleteManyPositions(where: PositionWhereInput): BatchPayload!
  createReport(data: ReportCreateInput!): Report!
  updateReport(data: ReportUpdateInput!, where: ReportWhereUniqueInput!): Report
  updateManyReports(data: ReportUpdateManyMutationInput!, where: ReportWhereInput): BatchPayload!
  upsertReport(where: ReportWhereUniqueInput!, create: ReportCreateInput!, update: ReportUpdateInput!): Report!
  deleteReport(where: ReportWhereUniqueInput!): Report
  deleteManyReports(where: ReportWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Position {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PositionConnection {
  pageInfo: PageInfo!
  edges: [PositionEdge]!
  aggregate: AggregatePosition!
}

input PositionCreateInput {
  id: ID
  name: String!
}

type PositionEdge {
  node: Position!
  cursor: String!
}

enum PositionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PositionPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PositionSubscriptionPayload {
  mutation: MutationType!
  node: Position
  updatedFields: [String!]
  previousValues: PositionPreviousValues
}

input PositionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PositionWhereInput
  AND: [PositionSubscriptionWhereInput!]
  OR: [PositionSubscriptionWhereInput!]
  NOT: [PositionSubscriptionWhereInput!]
}

input PositionUpdateInput {
  name: String
}

input PositionUpdateManyMutationInput {
  name: String
}

input PositionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PositionWhereInput!]
  OR: [PositionWhereInput!]
  NOT: [PositionWhereInput!]
}

input PositionWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  administrator(where: AdministratorWhereUniqueInput!): Administrator
  administrators(where: AdministratorWhereInput, orderBy: AdministratorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Administrator]!
  administratorsConnection(where: AdministratorWhereInput, orderBy: AdministratorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdministratorConnection!
  employee(where: EmployeeWhereUniqueInput!): Employee
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee]!
  employeesConnection(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeConnection!
  position(where: PositionWhereUniqueInput!): Position
  positions(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Position]!
  positionsConnection(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PositionConnection!
  report(where: ReportWhereUniqueInput!): Report
  reports(where: ReportWhereInput, orderBy: ReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Report]!
  reportsConnection(where: ReportWhereInput, orderBy: ReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReportConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Report {
  id: ID!
  assignedBy: String!
  assignedTo: String!
  arrivalTime: Int!
  departureTime: Int!
  workingDay: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ReportConnection {
  pageInfo: PageInfo!
  edges: [ReportEdge]!
  aggregate: AggregateReport!
}

input ReportCreateInput {
  id: ID
  assignedBy: String!
  assignedTo: String!
  arrivalTime: Int!
  departureTime: Int!
  workingDay: Int!
}

type ReportEdge {
  node: Report!
  cursor: String!
}

enum ReportOrderByInput {
  id_ASC
  id_DESC
  assignedBy_ASC
  assignedBy_DESC
  assignedTo_ASC
  assignedTo_DESC
  arrivalTime_ASC
  arrivalTime_DESC
  departureTime_ASC
  departureTime_DESC
  workingDay_ASC
  workingDay_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReportPreviousValues {
  id: ID!
  assignedBy: String!
  assignedTo: String!
  arrivalTime: Int!
  departureTime: Int!
  workingDay: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ReportSubscriptionPayload {
  mutation: MutationType!
  node: Report
  updatedFields: [String!]
  previousValues: ReportPreviousValues
}

input ReportSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReportWhereInput
  AND: [ReportSubscriptionWhereInput!]
  OR: [ReportSubscriptionWhereInput!]
  NOT: [ReportSubscriptionWhereInput!]
}

input ReportUpdateInput {
  assignedBy: String
  assignedTo: String
  arrivalTime: Int
  departureTime: Int
  workingDay: Int
}

input ReportUpdateManyMutationInput {
  assignedBy: String
  assignedTo: String
  arrivalTime: Int
  departureTime: Int
  workingDay: Int
}

input ReportWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  assignedBy: String
  assignedBy_not: String
  assignedBy_in: [String!]
  assignedBy_not_in: [String!]
  assignedBy_lt: String
  assignedBy_lte: String
  assignedBy_gt: String
  assignedBy_gte: String
  assignedBy_contains: String
  assignedBy_not_contains: String
  assignedBy_starts_with: String
  assignedBy_not_starts_with: String
  assignedBy_ends_with: String
  assignedBy_not_ends_with: String
  assignedTo: String
  assignedTo_not: String
  assignedTo_in: [String!]
  assignedTo_not_in: [String!]
  assignedTo_lt: String
  assignedTo_lte: String
  assignedTo_gt: String
  assignedTo_gte: String
  assignedTo_contains: String
  assignedTo_not_contains: String
  assignedTo_starts_with: String
  assignedTo_not_starts_with: String
  assignedTo_ends_with: String
  assignedTo_not_ends_with: String
  arrivalTime: Int
  arrivalTime_not: Int
  arrivalTime_in: [Int!]
  arrivalTime_not_in: [Int!]
  arrivalTime_lt: Int
  arrivalTime_lte: Int
  arrivalTime_gt: Int
  arrivalTime_gte: Int
  departureTime: Int
  departureTime_not: Int
  departureTime_in: [Int!]
  departureTime_not_in: [Int!]
  departureTime_lt: Int
  departureTime_lte: Int
  departureTime_gt: Int
  departureTime_gte: Int
  workingDay: Int
  workingDay_not: Int
  workingDay_in: [Int!]
  workingDay_not_in: [Int!]
  workingDay_lt: Int
  workingDay_lte: Int
  workingDay_gt: Int
  workingDay_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ReportWhereInput!]
  OR: [ReportWhereInput!]
  NOT: [ReportWhereInput!]
}

input ReportWhereUniqueInput {
  id: ID
}

type Subscription {
  administrator(where: AdministratorSubscriptionWhereInput): AdministratorSubscriptionPayload
  employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
  position(where: PositionSubscriptionWhereInput): PositionSubscriptionPayload
  report(where: ReportSubscriptionWhereInput): ReportSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  admin: String!
  name: String!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  id: ID
  admin: String!
  name: String!
  isActive: Boolean
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  admin_ASC
  admin_DESC
  name_ASC
  name_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: ID!
  admin: String!
  name: String!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  admin: String
  name: String
  isActive: Boolean
}

input TeamUpdateManyMutationInput {
  admin: String
  name: String
  isActive: Boolean
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  admin: String
  admin_not: String
  admin_in: [String!]
  admin_not_in: [String!]
  admin_lt: String
  admin_lte: String
  admin_gt: String
  admin_gte: String
  admin_contains: String
  admin_not_contains: String
  admin_starts_with: String
  admin_not_starts_with: String
  admin_ends_with: String
  admin_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
  name: String
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  lastName: String!
  mothersName: String
  phoneNumber: String
  isAdmin: Boolean!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  name: String!
  lastName: String!
  mothersName: String
  phoneNumber: String
  isAdmin: Boolean
  isActive: Boolean
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  lastName_ASC
  lastName_DESC
  mothersName_ASC
  mothersName_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  isAdmin_ASC
  isAdmin_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  lastName: String!
  mothersName: String
  phoneNumber: String
  isAdmin: Boolean!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  lastName: String
  mothersName: String
  phoneNumber: String
  isAdmin: Boolean
  isActive: Boolean
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  lastName: String
  mothersName: String
  phoneNumber: String
  isAdmin: Boolean
  isActive: Boolean
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  mothersName: String
  mothersName_not: String
  mothersName_in: [String!]
  mothersName_not_in: [String!]
  mothersName_lt: String
  mothersName_lte: String
  mothersName_gt: String
  mothersName_gte: String
  mothersName_contains: String
  mothersName_not_contains: String
  mothersName_starts_with: String
  mothersName_not_starts_with: String
  mothersName_ends_with: String
  mothersName_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  isAdmin: Boolean
  isAdmin_not: Boolean
  isActive: Boolean
  isActive_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    