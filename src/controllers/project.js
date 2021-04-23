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
    createdDate,
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
    createdDate,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
  });
  await project.save();
  return res.json({ project });
}

async function getProjects(req, res) {
  const { id } = req.params;

  const projects = await Project.find({ userId: id });
  return res.json(projects);
}

module.exports = {
  addProject,
  getProjects,
};
