const controllers = require('../controllers');
const router = require('express').Router();
// const { auth } = require('../utils');

router.get('/', controllers.message.get);

router.post('/', controllers.message.post);

router.put('/:id', controllers.message.put);

router.delete('/:id', controllers.message.delete);

module.exports = router;