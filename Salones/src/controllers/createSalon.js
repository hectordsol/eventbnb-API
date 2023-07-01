const Salon = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const salon = req.body;
    const newSalon = await Salon.create(salon);
    response(res,201,newSalon);
}