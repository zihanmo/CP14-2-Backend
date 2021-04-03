/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  dob: {
    type: String,
    required: false
  }
});

const model = mongoose.model("manager", schema);

module.exports = model;
