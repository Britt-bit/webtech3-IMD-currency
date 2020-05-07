const express = require('express');
const routerUser = express.Router();
const authController = require('../../../controllers/auth');
const userController = require('../../../controllers/api/v1/user_data');

/** /api/trasaction */

/* get transfers = haalt alle transfers op uit de database (enkel uit eigen account) */
routerUser.get("/", userController.getAllUser);

/* specifieke user ophalen bij login /*
/* /_id*/

/* user login */
routerUser.post("/signup", authController.signup);
routerUser.post("/login", authController.login);
/* get leaderboard: haal per user het aantal coins op */

module.exports = routerUser;