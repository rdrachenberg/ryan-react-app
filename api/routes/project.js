const controllers = require('../controllers');
const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/', controllers.project.get);

router.post('/', controllers.project.post);

router.put('/:id', controllers.project.put);

router.delete('/:id', controllers.project.delete);

module.exports = router;