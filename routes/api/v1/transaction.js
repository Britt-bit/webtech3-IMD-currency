const express = require("express");
const router = express.Router();
const transactionController = require("../../../controllers/api/v1/transaction");

/** /api/trasaction */
// router.get("/", transactionController.getAll);

/* post transfers = voegt een coin transactie toe in je database */
router.post("/", transactionController.create);

/* get transfer/:id : haalt de details van 1 transfer uit de databank en geeft die terug als JSON */
router.get("/:id", transactionController.getById);

/* get leaderboard: haal per user het aantal coins op */
router.get("/", transactionController.getLeaderboard);

module.exports = router;
