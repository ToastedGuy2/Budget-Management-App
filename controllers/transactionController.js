const validator = require('validator')
const Transaction = require('../models/transactionModel');

exports.checkTransactionAddBody = (req, res, next) => {
    const {
        title,
        amount,
        date,
        transaction_type
    } = req.body;
    const resBody = {
        status: "failed",
        message: "invalid data",
        errors: {}
    }
    try {
        if (validator.isEmpty(transaction_type)) {
            resBody.errors.transaction_type = "Transaction type is required. It must be 'Expense' or 'Income'";
        }
        if (validator.isEmpty(title)) {
            resBody.errors.title = "title is required"
        } else if (validator.isLength(title, {
                min: 1,
                max: 3
            })) {
            resBody.errors.title = "title must contains at least 3 characters"
        }
        const amountString = amount + "";
        if (validator.isEmpty(amountString)) {
            resBody.errors.price = "price is required"
        } else {
            const priceRegex = /(\d+\.\d{1,2})/g;
            if (!priceRegex.test(amountString)) {
                resBody.errors.price = "invalid amount. Remember to include the decimal value such as: .00, .1, .49,etc.\nExample: 5000.99";
            }
        }
        if (validator.isEmpty(date)) {
            resBody.errors.date = "date is required"
        } else {
            if (!validator.isDate(date, {
                    format: "YYYY-MM-DD"
                })) {
                resBody.errors.date = "invalid date.It has to follow the following pattern: MM/DD/YYYY"
            }
        }
        if (resBody.errors.title !== undefined || resBody.errors.amount !== undefined || resBody.errors.date !== undefined || resBody.errors.transaction_type !== undefined) {
            return res.status(400).json(resBody);
        }
    } catch (error) {
        res.status(400).json()
    }

    next();
}

exports.getAllTransactions = async (req, res) => {
    const transactions = await Transaction.find();
    res.json({
        status: "successful",
        results: transactions.length,
        data: {
            transactions
        }
    })
}
exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.json({
            status: "successful",
            data: {
                transaction
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "invalid data",
        })
    }
}
exports.addTransaction = async (req, res) => {
    try {
        const newTransaction = await Transaction.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                transaction: newTransaction
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "SORRY: something gone wrong in the server when processing your request"
        })
        console.error(error);
    }
}
exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                transaction
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "SORRY: something gone wrong in the server when processing your request"
        })
        console.error(error);
    }
}
exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.status(204).json({});
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "SORRY: something gone wrong in the server when processing your request"
        })
        console.error(error);
    }
};