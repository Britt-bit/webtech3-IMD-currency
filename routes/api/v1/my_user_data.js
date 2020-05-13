const express = require('express');
const routerMyUser = express.Router();
const userController = require('../../../controllers/api/v1/my_user_data');


routerMyUser.get("/", userController.getMyUser);


module.exports = routerMyUser;