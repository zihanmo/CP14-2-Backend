/** @format */

const express = require("express");

const router = express.Router();

const studentRoute = require("./routes/students.js");
const projectRoute = require("./routes/projects.js");
const courseRoute = require("./routes/courses.js");
const questionRoute = require("./routes/question.js");
const userRoute = require("./routes/users.js");
const anthRoute = require("./routes/auth.js");
const authGuard = require("./middleware/authGuard");
const commentRoute = require("./routes/comment.js")
router.use("/students", authGuard, studentRoute);
router.use("/courses", authGuard, courseRoute);
router.use("/users", userRoute);
router.use("/auth", anthRoute);
router.use("/project", projectRoute);
router.use("/question", questionRoute);
router.use("/comment", commentRoute);

module.exports = router;
