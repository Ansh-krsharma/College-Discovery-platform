const savedService = require("../services/savedService");

exports.getSaved = async (req, res, next) => {
  try {
    const saved = await savedService.getSaved(req.user.userId);
    res.json(saved);
  } catch (error) {
    next(error);
  }
};

exports.saveCollege = async (req, res, next) => {
  try {
    const saved = await savedService.saveCollege(req.user.userId, req.params.id);
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

exports.removeSavedCollege = async (req, res, next) => {
  try {
    await savedService.removeSavedCollege(req.user.userId, req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
