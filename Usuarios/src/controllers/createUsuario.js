const Usuario = require('../data');
const {response} = require('../utils');
// const jwt = require('jsonwebtoken');
// const {serialize}= require('cookie');

module.exports = async (req, res) => {
    console.log("creando usuario",req.body);
    const {email}=req.body;
    let user = {};
    const usuarioEncontrado = await Usuario.getByEmail(email);
    if (usuarioEncontrado) 
        {user=usuarioEncontrado;
        console.log("USUARIO ENCONTRADO: ",user);}
    else
        {user = await Usuario.create(req.body);
        console.log("USUARIO CREADO: ",user);}
    // const token = jwt.sign({
    //         exp: Math.floor(Date.now()/1000)+ (60 * 60 *24),
    //         user
    //     },'essecreto');
    // const serialized = serialize('mytokenUsuario',token,{
    //     httpOnly:true,
    // });
    // res.setHeader('Set-Cookie',serialized);
response(res,201,user);
}