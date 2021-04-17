const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  const decoded = await jwt.verify(token, config.secret);

  if (!decoded) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  req.currentUser = decoded.currentUser;
  next()
};

const notUser = async (req, res) => {
  const user = await User.findOne({ _id: req.userId }).exec();
  const role = Role.find({ _id: { $in: user.roles } }).exec();
};

const authJwt = {
  verifyToken,
  notUser,
};

module.exports = authJwt;
