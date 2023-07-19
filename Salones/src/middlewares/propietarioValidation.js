const axios = require("axios");
const { response } = require('../utils');
module.exports= async(req,res,next)=>{
    const {propietario}=req.body;
    const usuarioEncontrado=true;
    console.log("Es UUID?",isUUID.test(propietario));
   // const usuarioEncontrado = axios.get(`http://database:5001/Usuario/${propietario}`);
    if(usuarioEncontrado) return next();
    else response(res,404,'Error id usuario propietario no encontrado');
}
const isUUID =  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
