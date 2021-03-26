/** @format */

const User = require("../models/user");
const { generateToken } = require("../utils/jwt");

async function addUser(req, res) {
  const { email, password, role, fullName, gender, dob, staffId } = req.body;
  const user = new User({
    email,
    password,
    role,
    fullName,
    gender,
    dob,
    staffId
  });
  await user.hashPassword();
  await user.save();
  const token = generateToken(user._id);
  return res.json({ email, token });
}

module.exports = {
  addUser
};
