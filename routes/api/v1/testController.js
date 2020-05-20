const express = require("express");
const router = express.Router();
const testController = require("../../../controllers/api/v1/testController");

router.get("/:id", testController.getById);

module.exports = router;
