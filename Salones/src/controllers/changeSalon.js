const Salon = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const salon = req.body;
    const changedSalon = await Salon.change(id,salon);
    let statusCode;
    changedSalon?statusCode=200:statusCode=404;
    response(res, statusCode, changedSalon);
}