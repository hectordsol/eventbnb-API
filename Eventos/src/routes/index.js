const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getEventos);
router.get('/:id', middlewares.idValidation, controllers.getEvento);
router.put('/:id',
    middlewares.idValidation,
    middlewares.fechaValidation,
    middlewares.eventoValidation,
    controllers.changeEvento
);
router.delete('/:id', middlewares.idValidation, controllers.deleteEvento);
router.post('/',
    middlewares.fechaValidation,
    middlewares.eventoValidation, 
    middlewares.clienteValidation, 
    middlewares.salonValidation, 
    controllers.createEvento
);
module.exports = router;    