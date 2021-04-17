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
    fileUpload,
    approvalNumber,
    InclusionCriteria,
    ExclusionCriteria,
  } = req.body;
  const project = new Project({
    title,
    description,
    location,
    subjectNo,
    duration,
    date,
    fileUpload,
    approvalNumber,
    InclusionCriteria,
    ExclusionCriteria,
  });
  await project.save();
  return res.json({ project });
}

module.exports = {
  addProject,
};
