const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    posts: [Post]
    friendCount: Int
    friends: [User]
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
  }

  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    addPost(postText: String!): Post
    deletePost(_id: String!): Post
    addReply(postId: ID!, replyBody: String!): Post
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
