const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const evento = req.body;
    const newEvento = await Evento.create(evento);
    response(res,201,newEvento);
}