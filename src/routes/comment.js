/** @format */

const express = require("express");

const router = express.Router();

const {
  leaveComment,
  getComments,
  deleteComment,
} = require("../controllers/comment");

router.post("/", leaveComment);
router.get("/", getComments);
router.delete("/:id", deleteComment);
module.exports = router;
