const User = require("../model/User");

const getFilteredUser = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getFilteredUser
  };