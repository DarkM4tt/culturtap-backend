const { getFilteredUser } = require("../service/userService");
  
  const handleGetUser = async (req, res) => {

    const { search, ascending } = req.query;
  
    const result = await getFilteredUser(search, ascending);

    res.json(result);
  };
  
  module.exports = { handleGetUser };