const jwt = require('jsonwebtoken');
const Usuario = require('../data');
const {response} = require('../utils');
const SECRETO = 'ix8dG8xXk27WTZ-/E?-ZxGgpMyoBRwftdjV6413SsH2zwvuR=1BlEUKPG?IOFtWS33gEjXw9G?Kfs8E99UHFlQqpy!aCNrR4fkx74!qiSmCB97gE5P4k8vZU?9-Qvyffx2sn4qPR0T2=Klz3hOtV0uU68jxJo2VB3avaxENlv0B3yLQv543W?9PF3V035l1hvy5TVrTkWNtFmG3!oJdt7kmr3dMdEK3UBQ9VCABX!4A!DcqZGs5YKu0d6LA=2sJY';
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