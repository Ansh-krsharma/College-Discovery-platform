const prisma = require("../config/prisma");

exports.getSaved = async (userId) => {
  return prisma.savedCollege.findMany({
    where: { userId },
    include: { college: true },
    orderBy: { createdAt: "desc" },
  });
};

exports.saveCollege = async (userId, collegeId) => {
  return prisma.savedCollege.upsert({
    where: {
      userId_collegeId: { userId, collegeId },
    },
    update: {},
    create: { userId, collegeId },
    include: { college: true },
  });
};

exports.removeSavedCollege = async (userId, collegeId) => {
  await prisma.savedCollege.deleteMany({
    where: { userId, collegeId },
  });
};
