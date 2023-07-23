const axios = require("axios");
const { response } = require('../utils');
const ObjectId = require('mongoose').Types.ObjectId;
module.exports= async(req,res,next)=>{
    const {cliente}=req.body;

    if(!isValidMongoDBUUID(cliente)) return response(res,400,'Solicitud incorrecta con el ID');
    const usuarioEncontrado = await axios.get(`http://database:5001/Usuario/${cliente}`);
    if(usuarioEncontrado.data) return next();
    else return response(res,404,'Error id usuario cliente no encontrado');
}
function isValidMongoDBUUID(id){
     
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}