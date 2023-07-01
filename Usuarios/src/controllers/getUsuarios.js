const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const user = await Usuario.list();
    response(res, 200, user);
}