const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {email} =req.query;
    let data={};
    if(email) data = await Usuario.getByEmail(email);
    else   data = await Usuario.list();
    response(res, 200, data);
}