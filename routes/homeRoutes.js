const express = require("express");
const { getIndex } = require("../controllers/homeController");
const homeRouter = express.Router();

homeRouter.route("/").get(getIndex);

module.exports = homeRouter;
