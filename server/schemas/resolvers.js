const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Scores } = require("../models");
const { post } = require("../models/Reply");
const { signToken } = require("../utils/auth");

const resolvers = {
  // get the user
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts")
          .populate("friends");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("posts")
        .populate("friends");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("posts")
        .populate("friends");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    scores: async () => {
      return Scores.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // updatedUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, {
    //       new: true,
    //     });
    //   }
    //   throw new AuthenticationError("You need to be logged in");
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        await User.findByIdAndDelete({ _id: args._id });
      }
      throw new AuthenticationError("Incorrect credentials");
    },

    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // deletePost: async (parente, postId, context) => {
    //   if (context.user) {
    //     const deletePost = await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { posts: post._id } },
    //       { new: true }
    //     );
    //     return deletePost;
    //   }
    //   throw new AuthenticationError("Incorrect credentials");
    // },

    addReply: async (parent, { postId, replyBody }, context) => {
      if (context.user) {
        const updatedPost = await Post.findByIdAndUpdate(
          { _id: postId },
          {
            $push: { replies: { replyBody, username: context.user.username } },
          },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addScore: async (parent, args, context) => {
      const scores = await Scores.create({
        ...args,
      });

      return scores;
    },
  },
};

module.exports = resolvers;
