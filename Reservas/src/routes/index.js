const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const router = Router();
// const {mercadoPago} = require('../controllers/mercadoPago');


router.get('/', controllers.getReservas);
router.post('/', controllers.createReserva);

// router.post('/', mercadoPago);

module.exports = router;