const db = require("../models");
const User = db.user;
const moment = require("moment");
const bcrypt = require("bcryptjs");

exports.getAllUser = async (req, res) => {
  const users = await User.find({ isActive: true }).populate("roles").exec();
  res.status(200).send({ users: users });
};

exports.findUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id, isActive: true })
    .populate("roles")
    .exec();

  if (!user) {
    res.status(403).send({ message: "User không tồn tại" });
  }

  res.status(200).send({ user: user });
};

exports.updateUser = async (req, res) => {
  const user = req.body;
  if (user.password) {
    user.password = await bcrypt.hashSync(user.password);
  }
  const update = await User.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        ...user,
        updatedAt: moment().valueOf(),
      },
    }
  );
  update
    ? res.status(200).send({ message: "Update success" })
    : res.status(404).send({ message: "Update failed" });
};

exports.deleteUser = async (req, res) => {
  const role = req.currentUser.roles.name;
  const user = await User.findOne({ _id: req.params.id })
    .populate("roles")
    .exec();

  if (role === "moderator" && user.roles.name === "admin") {
    res.status(404).send({ message: "You not permission to handle delete" });
  } else {
    this.updateUser(req, res);
  }
};
