const express = require('express');
const routerUser = express.Router();
const userController = require('../../../controllers/api/v1/user_data');

/** /api/trasaction */

/* get transfers = haalt alle transfers op uit de database (enkel uit eigen account) */
routerUser.get("/", userController.getAllUser);

/* post transfers = voegt een coin transactie toe in je database */
routerUser.post("/", userController.createUser);

/* get leaderboard: haal per user het aantal coins op */

module.exports = routerUser;