const express = require("express");

const router = express.Router();

const { addProject } = require("../controllers/project");

router.post("/", addProject);

module.exports = router;
