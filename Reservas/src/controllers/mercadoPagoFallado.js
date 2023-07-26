// const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const status = req.query;
  console.log("EL PAGO NO SE CONCRETO: ");
  console.log(status);
    const reserva = "Cobrado MAL";
    let statusCode;
    reserva?statusCode=200:statusCode=404;
    response(res, statusCode, reserva);
}