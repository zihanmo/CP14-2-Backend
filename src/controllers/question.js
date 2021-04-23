/** @format */

const Question = require("../models/question");

async function addQuestion(req, res) {
  const { name } = req.body;
  const question = new Question({
    name,
  });
  await question.save();
  return res.json(question);
}

async function getAllQuestion(req, res) {
  const { id } = req.params;
  console.log(id);
  const question = await Question.find();
  return res.json(question);
}

module.exports = {
  addQuestion,
  getAllQuestion,
};
