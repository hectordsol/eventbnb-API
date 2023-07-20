const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getUsuarios);
router.get('/protected', controllers.getUserToken);
router.get('/:id', middlewares.idValidation, controllers.getUsuario);
router.put('/:id', middlewares.idValidation, middlewares.usuarioValidation, controllers.changeUsuario);
router.put('/password/:id', middlewares.idValidation, controllers.changePassword);
router.delete('/:id', middlewares.idValidation, controllers.deleteUsuario);
router.post('/', middlewares.authMiddlewares, controllers.createUsuario);
module.exports = router;    