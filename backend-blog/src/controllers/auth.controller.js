const config = require("../config/auth.config");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = db.user;
const Role = db.role;

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });

  if (req.body.roles) {
    const roles = await Role.find({
      name: { $in: req.body.roles },
    }).exec();
    user.roles = roles.map((role) => role._id);
    user.save();
    res.send({ message: "User was registered successfully!" });
  } else {
    const role = await Role.findOne({ name: "user" }).exec();
    user.roles = [role._id];
    user.save();
    res.send({ message: "User was registered successfully!" });
  }
};

exports.signin = async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
    .populate("roles")
    .exec();

  if (!user) return res.status(404).send({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match)
    return res
      .status(401)
      .send({ accessToken: null, message: "Invalid password" });

  const token = await jwt.sign({ id: user._id }, config.secret);

  const authorities = [];

  for (let i = 0; i < user.roles.length; i++) {
    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
  }

  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    roles: authorities,
    accessToken: token,
  });
};
