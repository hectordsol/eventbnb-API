const Usuario = require('../data');
const SECRETO = 'elsecreto';
const HASH = 13;
const {response} = require('../utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {serialize}= require('cookie');

module.exports = async (req, res) => {
    console.log("creando usuario",req.body);
    const {nombre,apellido,email,loginGoogle,password}=req.body;
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
                nombre,
                apellido,
                email,
                password: hashPassword,
                usergoogle: loginGoogle
            });
        console.log("USUARIO CREADO: ",user);
    }
    const token = jwt.sign({
            exp: Math.floor(Date.now()/1000)+ (60 * 60 *24),
            user
        },SECRETO);
    const serialized = serialize('mytokenUsuario',token,{
        httpOnly:true,
        sameSite:'none',
        maxAge: (1000 * 60 * 60 * 24),
        path: '/'
    });
    res.setHeader('Set-Cookie',serialized);
response(res,201,user);
}