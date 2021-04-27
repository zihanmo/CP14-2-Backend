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
    isPragnent,
    isSmoking,
    isLactating,
    isPlaningPragnent,
    gender,
    ageGroup,
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
    isPragnent,
    isSmoking,
    isLactating,
    isPlaningPragnent,
    gender,
    ageGroup,
  });
  await project.save();
  return res.json({ project });
}

async function getProjects(req, res) {
  const { id } = req.params;

  const projects = await Project.find({ userId: id });
  return res.json(projects);
}

async function deleteProject(req, res) {
  const { id } = req.params;
  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    return res.status(404).json("project not found");
  }

  return res.json(project);
}

module.exports = {
  addProject,
  getProjects,
  deleteProject,
};
