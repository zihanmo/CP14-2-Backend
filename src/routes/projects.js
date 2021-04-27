/** @format */

const express = require("express");

const router = express.Router();

const {
  addProject,
  getProjects,
  getProjectsById,
  deleteProject
} = require("../controllers/project");

router.post("/", addProject);
router.get("/:id", getProjectsById);
router.delete("/:id", deleteProject);
router.get("/", getProjects);
// router.get("/:pId", getProjectInfo);
module.exports = router;
