const axios = require("axios");
const { response } = require('../utils');
const ObjectId = require('mongoose').Types.ObjectId;
module.exports= async(req,res,next)=>{
    const {evento}=req.body;

    if(!isValidMongoDBUUID(evento)) return response(res,400,'Solicitud incorrecta con el ID');
    const eventoEncontrado = await axios.get(`http://database:5001/Evento/${evento}`);
    if(eventoEncontrado.data) return next();
    else return response(res,404,'Error id evento no encontrado');
}
function isValidMongoDBUUID(id){  
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}