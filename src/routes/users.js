const express = require("express");

const router = express.Router();

const { addUser, getUserInfo } = require("../controllers/users");

router.post("/", addUser);
router.get("/:id", getUserInfo);

module.exports = router;
