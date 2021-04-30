/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  projectId: {
    type: String,
    required: false,
  },

  title: {
    type: String,
    required: false,
  },

  approvalNumber: {
    type: String,
    required: false,
  },

  governance: {
    type: String,
    required: false,
  },

  createdDate: {
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

  InclusionCriteria: {
    type: String,
    required: false,
  },

  ExclusionCriteria: {
    type: String,
    required: false,
  }
});

const model = mongoose.model("Comment", schema);

module.exports = model;