/** @format */

const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
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
  },
  staffId: {
    type: String,
    required: false
  }
});

schema.methods.hashPassword = async function() {
  this.password = await bcrypt.hash(this.password, 10);
};

schema.methods.validatePassword = async function(password) {
  const validatePassword = await bcrypt.compare(password, this.password);
  return validatePassword;
};

const model = mongoose.model("User", schema);

module.exports = model;
