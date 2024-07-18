// schema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    age: Int!
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    createUser(name: String!,email: String!, age: Int!): User
  }
`;

module.exports = typeDefs;
