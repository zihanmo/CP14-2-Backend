const express = require("express");

const router = express.Router();

const {
  addProject,
  getProjects,
  deleteProject,
  getAllProjects,
  getProjectInfo
} = require("../controllers/project");

router.post("/", addProject);
router.get("/:id", getProjects);
router.delete("/:id", deleteProject);
router.get("/", getAllProjects);
router.get("/:pId", getProjectInfo);
module.exports = router;
