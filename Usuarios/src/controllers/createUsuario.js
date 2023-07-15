const Usuario = require('../data');
const HASH = 13;
const {response} = require('../utils');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    console.log("creando usuario",res.user);
    const {email,loginGoogle,password}=req.user;
    let user = {};
    let hashPassword="";
    const usuarioEncontrado = await Usuario.getByEmail(email);
    if (usuarioEncontrado) 
        {user=usuarioEncontrado;
        console.log("USUARIO ENCONTRADO: ",user);}
    else
        {
        if (!loginGoogle) hashPassword= await bcrypt.hash(password,HASH);
        user = await Usuario.create({
                email,
                password: hashPassword,
                google: loginGoogle
            });
        console.log("USUARIO CREADO: ",user);
    }
response(res,201,user);
}