/** @format */
const Manager = require("./manager");
const Patient = require("./patient");
const Worker = require("./worker");
const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  staffId: {
    type: String,
    required: false,
  },
  healthy: {
    type: String,
    required: false,
  },
  english: {
    type: String,
    required: false,
  },
  isPragnant: {
    type: String,
    required: false,
  },
  isSmoking: {
    type: String,
    required: false,
  },
  isLactating: {
    type: String,
    required: false,
  },
  isPlanning: {
    type: String,
    required: false,
  },
  healthy: {
    type: String,
    required: false,
  },
});

schema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};

schema.methods.validatePassword = async function (password) {
  const validatePassword = await bcrypt.compare(password, this.password);
  return validatePassword;
};

schema.pre("save", function () {
  const role = this.role;
  const userId = this._id;
  const name = this.fullName;
  const gender = this.gender;
  const dob = this.dob;
  const staffId = this.staffId;
  const email = this.email;
  switch (role) {
    case "Participant":
      const newPatient = new Patient({
        user: userId,
        name,
        gender,
        email,
      });
      newPatient.save();
      break;
    case "Health Care Workers":
      const newWorker = new Worker({
        user: userId,
        name,
        gender,
        email,
        staffId,
      });
      newWorker.save();
      break;
    case "Admin":
      const newAdmin = new Manager({
        user: userId,
        name,
        gender,
        email,
        dob,
      });
      newAdmin.save();
      break;
  }
});

const model = mongoose.model("User", schema);

module.exports = model;
