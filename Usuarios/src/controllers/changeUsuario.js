const Usuario = require('../data');
const HASH = 13;
const bcrypt = require('bcryptjs');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const user = req.body;
    if (!user.loginGoogle) user.password= await bcrypt.hash(user.password,HASH);
    const changedUser = await Usuario.change(id,user);
    let statusCode;
    console.log("usuario cambiado",changedUser);
    changedUser?statusCode=200:statusCode=404;
    response(res, statusCode, changedUser);
}