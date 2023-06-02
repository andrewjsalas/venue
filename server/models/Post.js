const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: [80, "Must be no more than 80 characters"]
    },
    body: {
        type: String,
        required: true,
        maxLength: [8000, "Must be no more than 8,000 characters"]
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: false,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Post", postSchema);