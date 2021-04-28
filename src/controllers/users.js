/** @format */

const User = require("../models/user");
const { generateToken } = require("../utils/jwt");

async function getUserInfo(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json("User not found");
    }
  
    return res.json(user);
  }

async function addUser(req, res) {
  const {
    email,
    password,
    role,
    fullName,
    gender,
    dob,
    staffId,
    healthy,
    english,
    isPragnent,
    isSmoking,
    isLactating,
    isPlanning
  } = req.body;
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
    staffId,
    healthy,
    english,
    isPragnent,
    isSmoking,
    isLactating,
    isPlanning
  });
  await user.hashPassword();
  await user.save();
  const token = generateToken(user._id);
  return res.json({ email, token });
}

module.exports = {
  addUser,
  getUserInfo
};
