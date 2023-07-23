const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getSalones);
router.get('/:id', middlewares.idValidation, controllers.getSalon);
router.put('/:id', middlewares.idValidation, middlewares.salonValidation, controllers.changeSalon);
router.delete('/:id', middlewares.idValidation, controllers.deleteSalon);
router.post('/',middlewares.salonValidation, middlewares.propietarioValidation, controllers.createSalon);
module.exports = router;    