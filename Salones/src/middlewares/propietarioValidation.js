const axios = require("axios");
const { response } = require('../utils');
const { validate } = require('uuid');
module.exports= async(req,res,next)=>{
    const {propietario}=req.body;

    if(!isValidMongoDBUUID(propietario)) return response(res,400,'Solicituda incorrecta con el ID');
    const usuarioEncontrado = axios.get(`http://database:5001/Usuario/${propietario}`);
    if(usuarioEncontrado) return next();
    else return response(res,404,'Error id usuario propietario no encontrado');
}
function isValidMongoDBUUID(id) {
    console.log("validacion de id: ",id)
    return validate(id);
  }