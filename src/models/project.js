/** @format */

const mongoose = require("mongoose");
const Question = require("./question");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },

  approvalNumber: {
    type: String,
    required: false
  },

  fileUpload: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  subjectNo: {
    type: String,
    required: false
  },
  duration: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: false
  },
  InclusionCriteria: [
    {
      type: String
    }
  ],

  ExclusionCriteria: [
    {
      type: String
    }
  ]
});

schema.pre("save", function() {
  const projectId = this._id;
  this.InclusionCriteria.map(item => {
    let splitArr = item.split(" - ");
    const NewQuestion = new Question({
      general: splitArr[0] === "General" ? true : false,
      worker: splitArr[0] === "Worker Need" ? true : false,
      inclusion: true,
      name: splitArr[1],
      project: projectId
    });
    NewQuestion.save();
  });
  this.ExclusionCriteria.map(item => {
    let splitArr = item.split(" - ");
    const NewQuestion = new Question({
      general: splitArr[0] === "General" ? true : false,
      worker: splitArr[0] === "Worker Need" ? true : false,
      inclusion: false,
      name: splitArr[1],
      project: projectId
    });
    NewQuestion.save();
  });
});

const model = mongoose.model("Project", schema);

module.exports = model;
