const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();


router.get('/', controllers.getReservas);
router.get('/cobrado', controllers.cobrar);
router.get('/pendiente', controllers.pendiente);
router.get('/fallado', controllers.fallado);
router.get('/:id', controllers.getReserva);
router.put('/:id', 
    // middlewares.idValidation,
    middlewares.clienteValidation,
    middlewares.eventoValidation, 
    controllers.changeReserva
);
router.post('/', 
    middlewares.clienteValidation,
    middlewares.eventoValidation, 
    controllers.createReserva
);

module.exports = router;