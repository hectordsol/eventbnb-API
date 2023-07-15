const jwt = require('jsonwebtoken');
const Usuario = require('../data');
const {response} = require('../utils');
const SECRETO = 'elsecreto';
module.exports = async(req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return response(res,401,"No hay token");
  }

  const verify= jwt.verify(token, SECRETO)
  const {email}=verify;    
console.log(verify);
const usuarioEncontrado = await Usuario.getByEmail(email);

    return response(res,201,usuarioEncontrado);
};