const models = require('../models');
// const config = require('../config/index');
// const utils = require('../utils');

module.exports = {
    // get all messages from collection message collection 
    get: (req, res, next) => {
        models.Project.find()
        .then((projects) => {
            // console.log('hit on message.js');
            console.log(projects);
            res.send(projects);
        }).catch(next);
    },

    post: (req, res, next) => {
        console.log('not getting here');
        const { title, still, hover, text, href} = req.body;
        console.log(req.body);
            models.Project.create({ title, still, hover, text, href })
            .then((createdProject) => {
                console.log(createdProject);
                res.send(createdProject);
            }).catch(next);
        
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Project.updateOne({ _id: id }, { description })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Project.deleteOne({ _id: id })
            .then((removedPost) => res.send(removedPost))
            .catch(next);
    }
};