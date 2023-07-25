const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const reservas = await Reserva.list();
    response(res, 200, reservas);
}