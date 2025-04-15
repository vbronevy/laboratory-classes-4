const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getHomeView);

const { MENU_LINKS } = require("../constants/navigation");

module.exports = router;
