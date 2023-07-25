const Reserva = require('../data');
const { response } = require('../utils');
const { mercadoPago } = require('./mercadoPago')

module.exports = async (req, res) => {
    const reserva = req.body;
    const init_point = await mercadoPago(reserva);
    const newReserva = await Reserva.create(reserva);
    response(res,201,{ init_point, newReserva });
}
