const jwt = require('jsonwebtoken');
const Usuario = require('../data');
const {response} = require('../utils');
const SECRETO = 'elsecreto';
module.exports = (req, res) => {
  console.log(req.headers);
  const authHeader = req.headers['Authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return response(res,401,"No hay token");
  }

  const verify= jwt.verify(token, SECRETO)
    
console.log(verify);
    return response(res,201,"Verificando");
};