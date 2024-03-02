const { getFilteredUser } = require("../service/userService");
  
  const handleGetUser = async (req, res) => {
  
    const result = await getFilteredUser();

    res.json(result);
  };
  
  module.exports = { handleGetUser };