module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Administrator {
  id: ID!
  user: User!
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
  user: UserCreateOneInput!
}

type AdministratorEdge {
  node: Administrator!
  cursor: String!
}

enum AdministratorOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdministratorPreviousValues {
  id: ID!
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
  user: UserUpdateOneRequiredInput
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
  user: UserWhereInput
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
}

type AggregateAdministrator {
  count: Int!
}

type AggregatePersonalInformation {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAdministrator(data: AdministratorCreateInput!): Administrator!
  updateAdministrator(data: AdministratorUpdateInput!, where: AdministratorWhereUniqueInput!): Administrator
  upsertAdministrator(where: AdministratorWhereUniqueInput!, create: AdministratorCreateInput!, update: AdministratorUpdateInput!): Administrator!
  deleteAdministrator(where: AdministratorWhereUniqueInput!): Administrator
  deleteManyAdministrators(where: AdministratorWhereInput): BatchPayload!
  createPersonalInformation(data: PersonalInformationCreateInput!): PersonalInformation!
  updatePersonalInformation(data: PersonalInformationUpdateInput!, where: PersonalInformationWhereUniqueInput!): PersonalInformation
  updateManyPersonalInformations(data: PersonalInformationUpdateManyMutationInput!, where: PersonalInformationWhereInput): BatchPayload!
  upsertPersonalInformation(where: PersonalInformationWhereUniqueInput!, create: PersonalInformationCreateInput!, update: PersonalInformationUpdateInput!): PersonalInformation!
  deletePersonalInformation(where: PersonalInformationWhereUniqueInput!): PersonalInformation
  deleteManyPersonalInformations(where: PersonalInformationWhereInput): BatchPayload!
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

type PersonalInformation {
  id: ID!
  email: String!
  names: String!
  lastName: String!
  mothersName: String!
  phoneNumber: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PersonalInformationConnection {
  pageInfo: PageInfo!
  edges: [PersonalInformationEdge]!
  aggregate: AggregatePersonalInformation!
}

input PersonalInformationCreateInput {
  id: ID
  email: String!
  names: String!
  lastName: String!
  mothersName: String!
  phoneNumber: Int
}

input PersonalInformationCreateOneInput {
  create: PersonalInformationCreateInput
  connect: PersonalInformationWhereUniqueInput
}

type PersonalInformationEdge {
  node: PersonalInformation!
  cursor: String!
}

enum PersonalInformationOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  names_ASC
  names_DESC
  lastName_ASC
  lastName_DESC
  mothersName_ASC
  mothersName_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PersonalInformationPreviousValues {
  id: ID!
  email: String!
  names: String!
  lastName: String!
  mothersName: String!
  phoneNumber: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PersonalInformationSubscriptionPayload {
  mutation: MutationType!
  node: PersonalInformation
  updatedFields: [String!]
  previousValues: PersonalInformationPreviousValues
}

input PersonalInformationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonalInformationWhereInput
  AND: [PersonalInformationSubscriptionWhereInput!]
  OR: [PersonalInformationSubscriptionWhereInput!]
  NOT: [PersonalInformationSubscriptionWhereInput!]
}

input PersonalInformationUpdateDataInput {
  email: String
  names: String
  lastName: String
  mothersName: String
  phoneNumber: Int
}

input PersonalInformationUpdateInput {
  email: String
  names: String
  lastName: String
  mothersName: String
  phoneNumber: Int
}

input PersonalInformationUpdateManyMutationInput {
  email: String
  names: String
  lastName: String
  mothersName: String
  phoneNumber: Int
}

input PersonalInformationUpdateOneRequiredInput {
  create: PersonalInformationCreateInput
  update: PersonalInformationUpdateDataInput
  upsert: PersonalInformationUpsertNestedInput
  connect: PersonalInformationWhereUniqueInput
}

input PersonalInformationUpsertNestedInput {
  update: PersonalInformationUpdateDataInput!
  create: PersonalInformationCreateInput!
}

input PersonalInformationWhereInput {
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
  names: String
  names_not: String
  names_in: [String!]
  names_not_in: [String!]
  names_lt: String
  names_lte: String
  names_gt: String
  names_gte: String
  names_contains: String
  names_not_contains: String
  names_starts_with: String
  names_not_starts_with: String
  names_ends_with: String
  names_not_ends_with: String
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
  phoneNumber: Int
  phoneNumber_not: Int
  phoneNumber_in: [Int!]
  phoneNumber_not_in: [Int!]
  phoneNumber_lt: Int
  phoneNumber_lte: Int
  phoneNumber_gt: Int
  phoneNumber_gte: Int
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
  AND: [PersonalInformationWhereInput!]
  OR: [PersonalInformationWhereInput!]
  NOT: [PersonalInformationWhereInput!]
}

input PersonalInformationWhereUniqueInput {
  id: ID
  email: String
}

type Query {
  administrator(where: AdministratorWhereUniqueInput!): Administrator
  administrators(where: AdministratorWhereInput, orderBy: AdministratorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Administrator]!
  administratorsConnection(where: AdministratorWhereInput, orderBy: AdministratorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdministratorConnection!
  personalInformation(where: PersonalInformationWhereUniqueInput!): PersonalInformation
  personalInformations(where: PersonalInformationWhereInput, orderBy: PersonalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PersonalInformation]!
  personalInformationsConnection(where: PersonalInformationWhereInput, orderBy: PersonalInformationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonalInformationConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  administrator(where: AdministratorSubscriptionWhereInput): AdministratorSubscriptionPayload
  personalInformation(where: PersonalInformationSubscriptionWhereInput): PersonalInformationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  password: String!
  isAdmin: Boolean!
  isActive: Boolean!
  personalInformation: PersonalInformation!
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
  password: String!
  isAdmin: Boolean
  isActive: Boolean
  personalInformation: PersonalInformationCreateOneInput!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  password_ASC
  password_DESC
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
  password: String!
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

input UserUpdateDataInput {
  password: String
  isAdmin: Boolean
  isActive: Boolean
  personalInformation: PersonalInformationUpdateOneRequiredInput
}

input UserUpdateInput {
  password: String
  isAdmin: Boolean
  isActive: Boolean
  personalInformation: PersonalInformationUpdateOneRequiredInput
}

input UserUpdateManyMutationInput {
  password: String
  isAdmin: Boolean
  isActive: Boolean
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
  isAdmin: Boolean
  isAdmin_not: Boolean
  isActive: Boolean
  isActive_not: Boolean
  personalInformation: PersonalInformationWhereInput
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
}
`
      }
    