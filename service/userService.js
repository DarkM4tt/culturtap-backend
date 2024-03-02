const User = require("../model/User");

const getFilteredUser = async (search, ascending, page, limit) => {
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

    const options = {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
      };
  
      const users = await User.paginate(query, { ...options, sort: sortOptions });

    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFilteredUser,
};