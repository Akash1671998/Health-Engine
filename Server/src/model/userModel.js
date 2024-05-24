const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "name is require"],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  jwtauthkey: {
    type: String,
  },
  description: {
    type: String,
  },
  createdby: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },

});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
