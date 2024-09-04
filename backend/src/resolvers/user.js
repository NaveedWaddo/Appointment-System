
const User = require('../models/User');

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const user = new User({ name, email });
      return user.save();
    },
    updateUser: (_, { id, name, email }) => {
      return User.findByIdAndUpdate(id, { name, email }, { new: true });
    },
    deleteUser: (_, { id }) => {
      return User.findByIdAndDelete(id).then(() => true).catch(() => false);
    },
    setAvailability: (_, { userId, availability }) => {
      return User.findByIdAndUpdate(userId, { availability }, { new: true });
    },
  },
};
