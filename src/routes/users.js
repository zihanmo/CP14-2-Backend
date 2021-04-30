const express = require("express");

const router = express.Router();

const { addUser, getUserInfo, updateUserInfo } = require("../controllers/users");

router.post("/", addUser);
router.get("/:id", getUserInfo);
router.put("/:id", updateUserInfo);

module.exports = router;
