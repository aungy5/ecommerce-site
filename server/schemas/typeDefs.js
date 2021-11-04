const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Dog {
    dogId: Int
    name: String
    type: String
    breeder: String
    image: String,
    description: String
  }

  type dogInput {
    dogId: Int
    name: String
    type: String
    breeder: String
    image: String,
    description: String
  }

  type User {
    _id: ID
    username: String
    email: String
    dogCount: Int
    savedDogs: [Dog]
    commentCount: Int
    commentsMade: [Comment]
    postCount: Int
    postsMade: [Post]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentBody: String!): Comment
    saveDog(inout: dogInput): User
    removeDog(dogId: Int!): User
  }
`;

module.exports = typeDefs;
