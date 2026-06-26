const prisma = require("../config/prisma");
const { hashPassword, comparePassword } = require("../utils/hash");
const { signToken } = require("../utils/jwt");

exports.signup = async ({ name, email, password }) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    const err = new Error("User already exists");
    err.status = 400;
    throw err;
  }

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  });

  const { password: _, ...safeUser } = user;
  const token = signToken({ userId: user.id });

  return { token, user: safeUser };
};

exports.login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    const err = new Error("User not found");
    err.status = 404;
    throw err;
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    const err = new Error("Invalid credentials");
    err.status = 401;
    throw err;
  }

  const { password: _, ...safeUser } = user;
  const token = signToken({ userId: user.id });

  return { token, user: safeUser };
};
