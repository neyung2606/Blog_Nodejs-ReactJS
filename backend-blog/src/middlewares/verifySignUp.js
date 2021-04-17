const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const { username, email } = req.body;
  const checkUsername = await User.findOne({ username: username })
  const checkEmail = await User.findOne({ email: email }).exec();

  if (checkUsername || checkEmail) {
    res.status(400).send({ message: "Faild! Email is already in use!" });
  }

  next()
};

const checkRolesExisted = (req, res, next) => {
  const { roles } = req.body;
  for (let i = 0; i < roles.length; i++) {
    if (!ROLES.includes(roles[i])) {
      res.status(400).send({
        message: `Failed! Role ${roles[i]} does not exist!`
      });
      return;
    }
  }
  next()
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
