/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const model = mongoose.model("question", schema);

module.exports = model;
