const Reserva = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const reserva = await Reserva.get(id);
    console.log(id,"ID en Schema de reserva: ",reserva)
    let statusCode;
    review?statusCode=200:statusCode=404;
    response(res, statusCode, reserva);
}