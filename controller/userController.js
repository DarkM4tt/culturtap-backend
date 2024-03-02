const { getFilteredUser } = require("../service/userService");
  
  const handleGetUser = async (req, res) => {

    const { search, ascending, page = 1, limit = 10 } = req.query;
  
    const result = await getFilteredUser(search, ascending, page, limit);

    res.json(result);
  };
  
  module.exports = { handleGetUser };