const router = require('../routes');

module.exports = (app) => {
    app.use('/api/message', router.message);
    app.use('/api/post', router.post);
    app.use('/api/project', router.project);
    app.use('/api/user', router.user);
    app.use('*', (req, res, next) => res.send('<h1>You know, somehting went wrong :thumbsdown: </h1>'));
};
