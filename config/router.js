const { users } = require("../router");

const router = ({ app }) => {
  app.use(users);
};

module.exports = router;
