const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getSalones);
router.get('/:id', controllers.getSalon);
router.put('/:id', middlewares.salonValidation, controllers.changeSalon);
router.delete('/:id', controllers.deleteSalon);
router.post('/',middlewares.salonValidation, middlewares.propietarioValidation, controllers.createSalon)
module.exports = router;    