const express = require("express");

const router = express.Router();

const { addProject, getProjects } = require("../controllers/project");

router.post("/", addProject);
router.get("/:id", getProjects);
module.exports = router;
