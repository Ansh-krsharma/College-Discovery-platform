const router = require("express").Router();
const { getCompare } = require("../controllers/compareController");

router.get("/", getCompare);

module.exports = router;
