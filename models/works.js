const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const workSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
    description: {
        type: String.
        required: true
    },
    image: {
        type: String,
        required: true
    },
    appLink: {
        type: String
        required: true
    },
    codeLink: {
        type: String
        required: true
    }
});

module.exports = Work = mongoose.model("Work", workSchema);