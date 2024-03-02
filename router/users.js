const express = require('express');
const User = require('../model/User');
const { handleGetUser } = require('../controller/userController');
const router = express.Router();

router.get("/users", handleGetUser);

module.exports = router