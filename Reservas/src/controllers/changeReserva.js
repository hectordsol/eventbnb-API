const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const reserva = req.body;
    const changedReserva = await Reserva.change(id,reserva);
    let statusCode;
    changedReserva?statusCode=200:statusCode=404;
    response(res, statusCode, changedReserva);
}