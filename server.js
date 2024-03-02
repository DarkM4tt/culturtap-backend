const expressJS = require("express");
const { express, configureApp } = require("./config");

const initializeServer = () => {
  const app = expressJS();

  const appInstance = { app }

  configureApp([express]).apply(appInstance);

  return appInstance;
};

module.exports = initializeServer;