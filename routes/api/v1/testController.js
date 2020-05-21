const express = require("express");
const router = express.Router();
const testController = require("../../../controllers/api/v1/testController");

router.get("/:id", testController.getHistory);
// router.get("/", testController.getHistory);
router.post("/", testController.createUser);
module.exports = router;
