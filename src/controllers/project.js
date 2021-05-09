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
    needEnglish,
    needHealth,
    date,
    fileUpload,
    workerNeed,
    createdDate,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
    isPregnant,
    isSmoking,
    isLactating,
    isPlanningPregnant,
    gender,
    ageGroup
  } = req.body;
  const project = new Project({
    userId,
    title,
    description,
    location,
    state,
    subjectNo,
    duration,
    needEnglish,
    needHealth,
    date,
    fileUpload,
    workerNeed,
    createdDate,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
    isPregnant,
    isSmoking,
    isLactating,
    isPlanningPregnant,
    gender,
    ageGroup
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

async function updateState(req, res) {
  const { id: projectId } = req.params;
  const { state } = req.body;
  const projectState = await Project.findByIdAndUpdate(
    projectId,
    {
      state
    },
    { new: true }
  );
  if (!projectState) {
    return res.status(404).send();
  }
  return res.json(projectState);
}

async function updateAll(req, res) {
  const { id: projectId } = req.params;
  const {
    title,
    description,
    location,
    state,
    subjectNo,
    duration,
    needEnglish,
    needHealth,
    date,
    fileUpload,
    workerNeed,
    createdDate,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
    isPregnant,
    isSmoking,
    isLactating,
    isPlanningPregnant,
    gender,
    ageGroup
  } = req.body;
  const projectState = await Project.findByIdAndUpdate(
    projectId,
    {
      title,
      description,
      location,
      state,
      subjectNo,
      duration,
      needEnglish,
      needHealth,
      date,
      fileUpload,
      workerNeed,
      createdDate,
      approvalNumber,
      governance,
      InclusionCriteria,
      ExclusionCriteria,
      isPregnant,
      isSmoking,
      isLactating,
      isPlanningPregnant,
      gender,
      ageGroup
    },
    { new: true }
  );
  if (projectState) {
    projectState.save();
  }

  if (!projectState) {
    return res.status(404).send();
  }

  return res.json(projectState);
}

async function findProjectSet(req, res) {
  const { id } = req.params;
  const idList = id.split(",");

  const records = await Project.find({ _id: { $in: idList } });

  return res.json(records);
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
  deleteProject,
  updateState,
  findProjectSet,
  updateAll
};
