const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const user = req.body;
    const newUser = await Usuario.create(user);
    response(res,201,newUser);
}