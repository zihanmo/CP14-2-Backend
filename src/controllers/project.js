/** @format */
const Project = require("../models/project");

async function addProject(req, res) {
  const {
    title,
    description,
    location,
    subjectNo,
    duration,
    date,
    criteria,
  } = req.body;
  const project = new Project({
    title,
    description,
    location,
    subjectNo,
    duration,
    date,
    criteria,
  });
  await project.save();
  return res.json({ project });
}

module.exports = {
  addProject,
};
