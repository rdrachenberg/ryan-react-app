const router = require('../routes');

const path = require('path');

module.exports = (app) => {
    app.use('/api/message', router.message);
    app.use('/api/post', router.post);
    app.use('/api/project', router.project);
    app.use('/api/user', router.user);
    

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
    // app.use('*', (req, res, next) => res.send('<h1>You know, somehting went wrong :thumbsdown: </h1>'));
};
