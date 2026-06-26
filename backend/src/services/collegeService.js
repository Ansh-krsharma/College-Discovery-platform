const prisma = require("../config/prisma");

exports.getColleges = async ({ page = 1, limit = 12, search = "", location = "", type = "", rating } = {}) => {
  const where = {
    ...(search ? { name: { contains: search, mode: "insensitive" } } : {}),
    ...(location ? { location } : {}),
    ...(type ? { type } : {}),
    ...(rating ? { rating: { gte: Number(rating) } } : {}),
  };

  const colleges = await prisma.college.findMany({
    where,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { rating: "desc" },
  });

  return {
    colleges,
    nextPage: colleges.length === limit ? page + 1 : null,
  };
};

exports.getCollegeById = async (id) => {
  const college = await prisma.college.findUnique({
    where: { id },
    include: { courses: true, reviews: true, students: true },
  });

  if (!college) {
    const err = new Error("College not found");
    err.status = 404;
    throw err;
  }

  return college;
};
