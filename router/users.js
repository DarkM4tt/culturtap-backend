const express = require('express');
const User = require('../model/User');
const router = express.Router();

router.get("/users", async (req, res) => {
    let user = await User.find({});
    res.json(user)
});

module.exports = router