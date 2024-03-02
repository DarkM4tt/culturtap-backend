const mongoose = require("mongoose");
const { addSampleData } = require("../service/addSampleData");

const connectMongoose = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DATABASE CONNECTED")
      addSampleData()
    }) 
    .catch((err) => console.error("Error connecting to MongoDB", err)); 
};

module.exports = connectMongoose;