const Evento = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const user = req.body;
    const changedEvento = await Evento.change(id,user);
    let statusCode;
    changedEvento?statusCode=200:statusCode=404;
    response(res, statusCode, changedEvento);
}