const usersData = require("../SampleData");
const User = require("../model/User");

const addSampleData = async () => {
    try {
      const count = await User.countDocuments();
      if (count === 0) {
        await User.create(usersData);
        console.log("Sample data added successfully.");
      } else {
        console.log("Sample data already exists in the collection.");
      }
    } catch (error) {
      console.error("Error adding sample data:", error);
    }
  };

module.exports = {
    addSampleData,
};