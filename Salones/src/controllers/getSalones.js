const Salon = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const salon = await Salon.list();
    response(res, 200, salon);
}