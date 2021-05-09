const express = require("express");

const router = express.Router();

const { addUser, getUserInfo, updateUserInfo, updateUserContact } = require("../controllers/users");

router.post("/", addUser);
router.get("/:id", getUserInfo);
router.put("/:id", updateUserInfo);
router.put("/contact/:id", updateUserContact);

module.exports = router;
