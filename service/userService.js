const User = require("../model/User");

const getFilteredUser = async (search) => {
  try {

    let query = {};
    
    if (search) {
      query = {
        $or: [
          { userName: { $regex: search, $options: "i" } },
          { userPlace: { $regex: search, $options: "i" } },
        ],
      };
    }

    const users = await User.find(query);

    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFilteredUser,
};