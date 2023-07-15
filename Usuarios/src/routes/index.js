const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getUsuarios);
router.get('/:id', controllers.getUsuario);
router.put('/:id', middlewares.usuarioValidation, controllers.changeUsuario);
router.delete('/:id', controllers.deleteUsuario);
router.post('/',/*middlewares.verificarToken,*/middlewares.authMiddlewares, controllers.createUsuario);
module.exports = router;    