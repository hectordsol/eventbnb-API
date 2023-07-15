const Usuario = require('../data');
const SECRETO = 'elsecreto';
const HASH = 13;
const {response} = require('../utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = async (req, res) => {
    console.log("creando o buscando usuario",req.body);
    const {email,loginGoogle,password}=req.body;
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
    const token = jwt.sign({
        exp: Math.floor(Date.now()/1000)+ (60 * 60 *24 * 30),
        email
    },SECRETO);

response(res,201,token);
}