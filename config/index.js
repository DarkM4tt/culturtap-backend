
const express = require("./express.js");
const configureApp = require("./configure.js");
const mongoose = require("./mongoose.js");
const router = require("./router.js");

module.exports = {
  express,
  configureApp,
  mongoose,
  router
};

