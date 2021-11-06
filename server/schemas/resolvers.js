const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({_id: context.user._id})
        .select('-__v -password')
        .populate('comments')
        .populate('posts');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // GET ONE COMMENT
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },
    // GET ALL COMMENTS 
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    // GET USER BY USERNAME
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select('-__v -password')
      .populate('comments')
      .populate('posts');
    },
    // GET ALL USERS
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate('comments')
      .populate('posts');
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const comment = new Comment({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { comments: comment } });

        return comment;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    saveDog: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedDogs: input } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('Not logged in');
    },
    removeDog: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedDogs: { dogId: args.dogId } } },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError('Not logged in');
    }
  }
};

module.exports = resolvers;
