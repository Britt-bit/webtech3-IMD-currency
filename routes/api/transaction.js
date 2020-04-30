const express = require('express');
const router = express.Router();
const transactionController = require('../../controllers/api/transaction');

/** /api/trasaction */
router.get("/", transactionController.getAll);

router.post("/", transactionController.create);

module.exports = router;