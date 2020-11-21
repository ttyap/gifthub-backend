const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    // var name below TBC
    transactionID: {
        type: Number,
        required: true,
    },
    donorID: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    requestorID: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    status: {
        type: mongoose.Schema.ObjectId,
        ref: "Item",
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const TransactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = TransactionModel;
