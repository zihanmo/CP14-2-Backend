/** @format */

const express = require("express");

const router = express.Router();

const { addQuestion, getQuestion } = require("../controllers/question");

router.get("/", getQuestion);
router.post("/", addQuestion);

module.exports = router;
