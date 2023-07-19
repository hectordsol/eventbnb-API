const axios = require("axios");
const { response } = require('../utils');
module.exports= async(req,res,next)=>{
    const {propietario}=req.body;
    const usuarioEncontrado = axios.get(`http://database:5001/Usuario/${propietario}`);
    if(usuarioEncontrado) return next();
    else response(res,404,'Error id usuario propietario no encontrado');
}