/** @format */

const express = require("express");

const router = express.Router();

const { addQuestion, getAllQuestion } = require("../controllers/question");

router.get("/", getAllQuestion);
router.post("/", addQuestion);

module.exports = router;
