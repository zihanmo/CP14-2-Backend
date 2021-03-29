/** @format */

const User = require("../models/user");
const { generateToken } = require("../utils/jwt");

async function addUser(req, res) {
  const { email, password, role, fullName, gender, dob, staffId } = req.body;
  const existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    return res.status(401).json("email is already taken");
  }
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
