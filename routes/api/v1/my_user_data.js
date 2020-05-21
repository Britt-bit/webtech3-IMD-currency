const express = require("express");
const routerMyUser = express.Router();
const userController = require("../../../controllers/api/v1/my_user_data");

routerMyUser.get("/", userController.getMyUser);
/* get transfers = haalt alle transfers op uit de database (enkel uit eigen account) */
routerMyUser.get("/:id", userController.getHistory);

module.exports = routerMyUser;
