const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const messageSchema = new Schema({

    firstname: {
        type: String,
        required: true,
    },

    lastname:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = new Model('Message', messageSchema);