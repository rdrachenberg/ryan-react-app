const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const projectSchema = new Schema({

    title: {
        type: String,
        // required: true,
    },

    still:{
        type: String,
        required: true,
    },
    hover: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = new Model('Project', projectSchema);