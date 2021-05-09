/** @format */

const mongoose = require("mongoose");
const Question = require("./question");

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: false
  },

  title: {
    type: String,
    required: false
  },

  state: {
    type: String,
    required: false
  },

  approvalNumber: {
    type: String,
    required: false
  },

  governance: {
    type: String,
    required: false
  },
  createdDate: {
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
  ],

  isPregnant: {
    type: Boolean
  },

  isSmoking: {
    type: Boolean
  },

  needEnglish: {
    type: Boolean
  },
  needHealth: {
    type: Boolean
  },

  isLactating: {
    type: Boolean
  },

  isPlanningPregnant: {
    type: Boolean
  },

  workerNeed: {
    type: Boolean
  },

  gender: {
    type: String
  },

  ageGroup: {
    type: String
  }
});

schema.pre("save", function() {
  const projectId = this._id;

  Question.deleteMany({ project: projectId }, function(err) {
    console.log(err);
  });

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
