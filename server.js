const expressJS = require("express");
const { express, configureApp, mongoose } = require("./config");

const initializeServer = () => {
  const app = expressJS();

  const appInstance = { app }

  configureApp([express, mongoose]).apply(appInstance);

  return appInstance;
};

module.exports = initializeServer;