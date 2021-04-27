/** @format */

const express = require("express");

const router = express.Router();

const {
  addProject,
  getProjects,
  getProjectsById,
  deleteProject,
  updateState
} = require("../controllers/project");

router.post("/", addProject);
router.get("/:id", getProjectsById);
router.delete("/:id", deleteProject);
router.get("/", getProjects);
router.put('/:id',updateState); 
module.exports = router;
