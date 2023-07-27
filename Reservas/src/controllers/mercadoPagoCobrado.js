// const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const status = req.query;
  console.log("ESTO ES SUCCESS: ");
  console.log(status.preference_id);
    const reserva = "Cobrado Bien";
    let statusCode;
    reserva?statusCode=200:statusCode=404;
    response(res, statusCode, reserva);
}