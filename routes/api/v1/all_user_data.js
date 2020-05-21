const express = require('express');
const routerAllUser = express.Router();
const userController = require('../../../controllers/api/v1/all_user_data');


routerAllUser.get("/", userController.getAllUser);


module.exports = routerAllUser;