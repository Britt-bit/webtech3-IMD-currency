const express = require("express");
const router = express.Router();
const testController = require("../../../controllers/api/v1/testController");

router.get("/:id", testController.getById);
router.post("/", testController.create);
module.exports = router;