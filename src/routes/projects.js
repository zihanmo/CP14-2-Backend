const express = require("express");

const router = express.Router();

const {
  addProject,
  getProjects,
  deleteProject,
} = require("../controllers/project");

router.post("/", addProject);
router.get("/:id", getProjects);
router.delete("/:id", deleteProject);
module.exports = router;
