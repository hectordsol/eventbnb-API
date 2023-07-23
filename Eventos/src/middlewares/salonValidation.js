const axios = require("axios");
const { response } = require('../utils');
const ObjectId = require('mongoose').Types.ObjectId;
module.exports= async(req,res,next)=>{
    const {salon}=req.body;

    if(!isValidMongoDBUUID(salon)) return response(res,400,'Solicitud incorrecta con el ID');
    const salonEncontrado = await axios.get(`http://database:5001/Salon/${salon}`);
    if(salonEncontrado.data) return next();
    else return response(res,404,'Error id salon no encontrado');
}
function isValidMongoDBUUID(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}