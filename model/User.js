const { Schema, model } = require("mongoose");
const paginate = require('mongoose-paginate-v2');

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, strictPopulate: false }
);

userSchema.plugin(paginate);

module.exports = model("User", userSchema);
