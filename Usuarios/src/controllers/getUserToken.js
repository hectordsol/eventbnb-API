const jwt = require('jsonwebtoken');
const Usuario = require('../data');
const {response} = require('../utils');
const SECRETO = 'elsecreto';
module.exports = (req, res) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader",authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  console.log("token: ",token);
  if (!token) {
    return response(res,401,"No hay token");
  }

  const verify= jwt.verify(token, SECRETO)
    
console.log(verify);
    return response(res,201,"Verificando");
};