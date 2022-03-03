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

  type Score {
    _id: ID
    score: String
    userId: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    scores(limit: Int): [Score]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    deleteUser(_id: String!): User
    
    addPost(postText: String!): Post
    deletePost(_id: String!): Post
    addReply(postId: ID!, replyBody: String!): Post
    
    addFriend(friendId: ID!): User
    
    addScore(score: String!, userId: String!): Score
  }
`;

module.exports = typeDefs;
