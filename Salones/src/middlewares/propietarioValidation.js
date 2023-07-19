const axios = require("axios");
const { response } = require('../utils');
const ObjectId = require('mongoose').Types.ObjectId;
module.exports= async(req,res,next)=>{
    const {propietario}=req.body;

    if(!isValidMongoDBUUID(propietario)) return response(res,400,'Solicituda incorrecta con el ID');
    const usuarioEncontrado = await axios.get(`http://database:5001/Usuario/${propietario}`);
    console.log(usuarioEncontrado);
    if(usuarioEncontrado.data) return next();
    else return response(res,404,'Error id usuario propietario no encontrado');
}
function isValidMongoDBUUID(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}