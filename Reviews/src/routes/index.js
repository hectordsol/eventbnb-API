const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getReviews);
router.get('/:id', middlewares.idValidation, controllers.getReview);
router.put('/:id', middlewares.idValidation, middlewares.reviewValidation, controllers.changeReview);
router.delete('/:id', middlewares.idValidation, controllers.deleteReview);
router.post('/',
    middlewares.reviewValidation,
    middlewares.clienteValidation,
    middlewares.eventoValidation,
    controllers.createReview)
module.exports = router;    