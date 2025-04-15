const express = require("express");

const logger = require("../utils/logger");

const router = express.Router();

const logoutController = require("../controllers/logoutController");
router.get("/", logoutController.killApplication);


module.exports = router;
