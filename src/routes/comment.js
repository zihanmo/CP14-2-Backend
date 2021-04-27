/** @format */

const express = require("express");

const router = express.Router();

const { leaveComment, getComments } = require("../controllers/comment");

router.post("/", leaveComment);
router.get("/", getComments);
module.exports = router;
