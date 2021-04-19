/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  name: {
    type: String
  },
  inclusion: { type: Boolean },
  general: { type: Boolean },
  worker: { type: Boolean }
});

const model = mongoose.model("question", schema);

module.exports = model;
