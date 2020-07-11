const { gql } = require('apollo-server-express');

const schema = gql`
  type User {
    name: String
    age: Int
    id: String
  }
  input UserInput {
    name: String!,
    age: Int!
  }
  input UpdateUser {
    id: String!
    data: UserInput
  }
  type Mutation {
    createUser(input: UserInput): String
    updateUser(input: UpdateUser): String
    deleteUser(id: String!): String
  }
  type Query {
    hi: String
    user(id: String!): User
    users: [User]
  }
`;

module.exports = schema;