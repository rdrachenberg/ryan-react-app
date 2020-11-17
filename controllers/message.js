const models = require('../models');
// const config = require('../config/index');
// const utils = require('../utils');

module.exports = {
    // get all messages from collection message collection 
    get: (req, res, next) => {
        models.Message.find()
        .then((messages) => {
            // console.log('hit on message.js');
            console.log(messages);
            res.send(messages);
        }).catch(next);
    },

    post: (req, res, next) => {
        const { firstname, lastname, email, message, date} = req.body;
        // console.log(req.body);
            models.Message.create({ firstname, lastname, email, message, date })
            .then((createdMessage) => {
                console.log(createdMessage);
                res.send(createdMessage);
            }).catch(next);
        
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Message.updateOne({ _id: id }, { description })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Message.deleteOne({ _id: id })
            .then((removedPost) => res.send(removedPost))
            .catch(next);
    }
};