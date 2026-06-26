const collegeService = require("../services/collegeService");

exports.getColleges = async (req, res, next) => {
  try {
    const result = await collegeService.getColleges({
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 12,
      search: req.query.search || "",
      location: req.query.location || "",
      type: req.query.type || "",
      rating: req.query.rating,
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.getCollegeById = async (req, res, next) => {
  try {
    const college = await collegeService.getCollegeById(req.params.id);
    res.json(college);
  } catch (error) {
    next(error);
  }
};
