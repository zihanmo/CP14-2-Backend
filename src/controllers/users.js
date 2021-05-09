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

async function updateUserInfo(req, res) {
    const { id: userID } = req.params;
    const { 
        gender,
        healthy,
        english,
        isPregnant,
        isSmoking,
        isLactating,
        isPlanning,
    } = req.body;
    const userInfo = await User.findByIdAndUpdate(
        userID,
      {
        gender,
        healthy,
        english,
        isPregnant,
        isSmoking,
        isLactating,
        isPlanning,
      },
      { new: true }
    );
    if (!userInfo) {
      return res.status(404).send();
    }
    return res.json(userInfo);
  }

  async function updateUserContact(req, res) {
    const { id: userID } = req.params;
    const { 
        contactMethod,
        phoneNum
    } = req.body;
    const userInfo = await User.findByIdAndUpdate(
        userID,
      {
        contactMethod,
        phoneNum
      },
      { new: true }
    );
    if (!userInfo) {
      return res.status(404).send();
    }
    return res.json(userInfo);
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
    isPragnant,
    isSmoking,
    isLactating,
    isPlanning,
    contactMethod,
    phoneNum
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
    isPragnant,
    isSmoking,
    isLactating,
    isPlanning,
    contactMethod,
    phoneNum
  });
  await user.hashPassword();
  await user.save();
  const token = generateToken(user._id);
  return res.json({ email, token });
}

module.exports = {
  addUser,
  getUserInfo,
  updateUserInfo,
  updateUserContact
};
