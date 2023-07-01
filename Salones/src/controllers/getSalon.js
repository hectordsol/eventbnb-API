const Salon = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const salon = await Salon.get(id);
    let statusCode;
    salon?statusCode=200:statusCode=404;
    response(res, statusCode, salon);
}