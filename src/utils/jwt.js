/** @format */

const jwt = require("jsonwebtoken");

function generateToken(id) {
  const token = jwt.sign({ id }, "jttjttjtt", {
    expiresIn: "1d"
  });
  return token;
}

function validateToken(token) {
  let decoded;
  try {
    decoded = jwt.verify(token, "jttjttjtt");
  } catch (e) {
    return null;
  }
  return decoded;
}

module.exports = { validateToken, generateToken };
