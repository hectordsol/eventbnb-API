const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();


router.get('/', controllers.getReservas);
router.get('/cobrado', controllers.cobrar);
router.get('/pendiente', controllers.pendiente);
router.get('/:id', controllers.getReserva);
router.put('/:id', controllers.changeReserva);
router.post('/', controllers.createReserva);

module.exports = router;