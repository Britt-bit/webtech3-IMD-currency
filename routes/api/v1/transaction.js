const express = require('express');
const router = express.Router();
const transactionController = require('../../../controllers/api/v1/transaction');

/** /api/trasaction */

/* get transfers = haalt alle transfers op uit de database (enkel uit eigen account) */
router.get("/", transactionController.getAll);

/* post transfers = voegt een coin transactie toe in je database */
router.post("/", transactionController.create);



/* get transfer/:id : haalt de details van 1 transfer uit de databank en geeft die terug als JSON */

/* get leaderboard: haal per user het aantal coins op */

module.exports = router;