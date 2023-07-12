const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/', controllers.getReviews);
router.get('/:id', controllers.getReview);
router.put('/:id', middlewares.reviewValidation, controllers.changeReview);
router.delete('/:id', controllers.deleteReview);
router.post('/',middlewares.reviewValidation, controllers.createReview)
module.exports = router;    