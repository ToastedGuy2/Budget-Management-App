const express = require("express");
const {
    checkTransactionAddBody,
    getAllTransactions,
    getTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction
} = require("../controllers/transactionController");

const transactionRouter = express.Router();
transactionRouter.route("/").get(getAllTransactions).post(checkTransactionAddBody, addTransaction);
transactionRouter.route("/:id").get(getTransaction).patch(updateTransaction).delete(deleteTransaction);

module.exports = transactionRouter;