const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transaction_type: {
        type: String,
        required: [true, "Transaction type value required"]
    },
    title: {
        type: String,
        required: [true, "Title value required"]
    },
    amount: {
        type: Number,
        required: [true, "Amount value required"],
    },
    category: {
        type: String,
        required: [true, "Category value required"]
    },
    date: {
        type: Date,
        required: [true, "Date value required"]
    },
})
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;