const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getEventos);
router.get('/:id', controllers.getEvento);
router.put('/:id', middlewares.eventoValidation, controllers.changeEvento);
router.delete('/:id', controllers.deleteEvento);
router.post('/',middlewares.eventoValidation, controllers.createEvento)
module.exports = router;    