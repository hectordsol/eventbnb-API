const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const evento = await Evento.list();
    response(res, 200, evento);
}