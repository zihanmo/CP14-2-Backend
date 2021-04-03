/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  email: {
    type: String,
    required: false
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

const model = mongoose.model("patient", schema);

module.exports = model;
