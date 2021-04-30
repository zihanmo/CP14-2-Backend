/** @format */

const express = require("express");

const router = express.Router();

const {
  addProject,
  getProjects,
  getProjectsById,
  deleteProject,
  updateState,
  findProjectSet,
  updateAll,
} = require("../controllers/project");

router.post("/", addProject);
router.get("/set/:id", findProjectSet);
router.get("/:id", getProjectsById);
router.delete("/:id", deleteProject);
router.get("/", getProjects);
router.put("/:id", updateState);
router.put("/all/:id", updateAll);
module.exports = router;
