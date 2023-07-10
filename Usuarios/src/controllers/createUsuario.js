const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res,next) => {
    console.log(next,"creando usuario",req.body);
    const user = req.body;
    const newUser = await Usuario.create(user);
    console.log(newUser);
    response(res,201,newUser);
}