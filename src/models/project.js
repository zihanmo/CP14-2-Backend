/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },

  approvalNumber: {
    type: String,
    required: false,
  },

  fileUpload: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  subjectNo: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  InclusionCriteria: [
    {
      type: String,
    },
  ],

  ExclusionCriteria: [
    {
      type: String,
    },
  ],
});

const model = mongoose.model("Project", schema);

module.exports = model;
