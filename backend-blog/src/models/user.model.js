const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      require: true,
    },
    email: String,
    password: String,
    phoneNumber: String,
    isActive: {
      type: Boolean,
      default: true
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    createdAt: Number,
    updatedAt: Number
  })
);

module.exports = User;
