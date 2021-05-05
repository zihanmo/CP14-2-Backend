/** @format */

const Question = require("../models/question");

async function addQuestion(req, res) {
  const { name } = req.body;
  const question = new Question({
    name
  });
  await question.save();
  return res.json(question);
}

async function getQuestion(req, res) {
  const { project } = req.query;
  if (project) {
    const question = await Question.find({ project: project });
    return res.json(question);
  } else {
    const question = await Question.find();
    return res.json(question);
  }
}
module.exports = {
  addQuestion,
  getQuestion
};
