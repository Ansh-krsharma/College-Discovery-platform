const prisma = require("../config/prisma");

exports.getCompare = async (req, res) => {
  const { ids } = req.query;
  if (!ids) return res.json([]);

  const collegeIds = ids.split(",").filter(Boolean);
  const colleges = await prisma.college.findMany({
    where: { id: { in: collegeIds } },
  });

  res.json(colleges);
};
