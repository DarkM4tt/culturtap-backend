const { getFilteredUser } = require("../service/userService");
  
  const handleGetUser = async (req, res) => {

    const { search } = req.query;
  
    const result = await getFilteredUser(search);

    res.json(result);
  };
  
  module.exports = { handleGetUser };