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
<<<<<<< HEAD
    ExclusionCriteria,
    isPragnent,
    isSmoking,
    isLactating,
    isPlaningPragnent,
    gender,
    ageGroup,
=======
    ExclusionCriteria
>>>>>>> main
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
<<<<<<< HEAD
    ExclusionCriteria,
    isPragnent,
    isSmoking,
    isLactating,
    isPlaningPragnent,
    gender,
    ageGroup,
=======
    ExclusionCriteria
>>>>>>> main
  });
  await project.save();
  return res.json({ project });
}

async function getProjectsById(req, res) {
  const { id } = req.params;
  const projects = await Project.findById(id);
  return res.json(projects);
}

async function getProjects(req, res) {
  const { user } = req.query;
  if (user) {
    const projects = await Project.find({ userId: user });
    return res.json(projects);
  } else {
    const project = await Project.find();
    return res.json(project);
  }
}

async function deleteProject(req, res) {
  const { id } = req.params;
  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    return res.status(404).json("project not found");
  }

  return res.json(project);
}

// async function getProjectInfo(req, res) {
//   const { id } = req.params;
//   const project = await Project.findById(id);
//   if (!project) {
//     return res.status(404).json("project not found");
//   }

//   return res.json(project);
// }

module.exports = {
  addProject,
  getProjects,
  getProjectsById,
  deleteProject
};
