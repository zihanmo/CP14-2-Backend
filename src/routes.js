/** @format */

const express = require("express");

const router = express.Router();

const projectRoute = require("./routes/projects.js");
const questionRoute = require("./routes/question.js");
const userRoute = require("./routes/users.js");
const anthRoute = require("./routes/auth.js");
const commentRoute = require("./routes/comment.js");
router.use("/users", userRoute);
router.use("/auth", anthRoute);
router.use("/project", projectRoute);
router.use("/question", questionRoute);
router.use("/comment", commentRoute);

module.exports = router;
