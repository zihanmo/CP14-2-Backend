/** @format */
const Project = require("../models/project");

async function addProject(req, res) {
  const {
    userId,
    title,
    description,
    location,
    state,
    subjectNo,
    duration,
    date,
    fileUpload,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
  } = req.body;
  const project = new Project({
    userId,
    title,
    description,
    location,
    state,
    subjectNo,
    duration,
    date,
    fileUpload,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
  });
  await project.save();
  return res.json({ project });
}

module.exports = {
  addProject,
};
