const express = require("express");
const router = express.Router();
const testController = require("../../../controllers/api/v1/testController");

router.get("/", testController.getLeaderboard);
router.post("/", testController.createUser);
module.exports = router;
