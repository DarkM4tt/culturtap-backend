const expressJS = require("express");
const { express, configureApp, mongoose, router } = require("./config");

const initializeServer = () => {
  const app = expressJS();

  const appInstance = { app };

  configureApp([express, mongoose, router]).apply(appInstance);

  return appInstance;
};

module.exports = initializeServer;
