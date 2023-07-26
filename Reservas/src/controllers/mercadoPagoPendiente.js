// const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
  
    const reserva = "Pago Pendiente";
    let statusCode;
    reserva?statusCode=200:statusCode=404;
    response(res, statusCode, reserva);
}