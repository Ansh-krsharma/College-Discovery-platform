const jwt = require("jsonwebtoken");

const getSecret = () => process.env.JWT_SECRET || "dev-secret";

exports.signToken = (payload) => {
  return jwt.sign(payload, getSecret(), { expiresIn: "7d" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, getSecret());
};
