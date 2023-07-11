const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    console.log("creando usuario",req.body);
    let user = {};
    const usuarioEncontrado = await Usuario.getByEmail(email);
    if (usuarioEncontrado) 
        {user=usuarioEncontrado; console.log("USUARIO ENCONTRADO: ",user);}
    else
        {user = await Usuario.create(req.body);console.log("USUARIO CREADO: ",user);}
    response(res,201,user);
}