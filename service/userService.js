const User = require("../model/User");

const getFilteredUser = async (search, ascending) => {
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

    let sortOptions = {};
    if (ascending && ascending.toLowerCase() === 'true') {
      sortOptions = { ratings: 1 };
    } else if (ascending && ascending.toLowerCase() === 'false') {
      sortOptions = { ratings: -1 };
    }

    const users = await User.find(query).sort(sortOptions);

    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFilteredUser,
};