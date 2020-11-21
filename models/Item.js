const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    // var name below TBC
    postID: {
        type: Number,
        required: true,
    },
    type: {
        type: ["Request", "Offer"],
        required: true,
    },
    title: {
        type: String,
        required: true,
        max: 200,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: String,
    delivery: {
        type: ["Yes", "No"],
        required: true,
    },
    // status: {
    //     type: Boolean,
    //     default: false,
    // },
    status: {
        type: ["Open", "Fulfilled"],
        default: "Open",
    },
    tags: [String],
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
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

const ItemModel = mongoose.model("Item", itemSchema);

module.exports = ItemModel;
