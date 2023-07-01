const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const evento = await Evento.remove(id);
    let statusCode;
    evento?statusCode=200:statusCode=404;
    response(res, statusCode, evento);
}