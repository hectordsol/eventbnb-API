const {ClientError} =require('../utils/errors');
const ObjectId = require('mongoose').Types.ObjectId;
module.exports= (req,res,next)=>{
    const {id} = req.params;
    if(isValidMongoDBUUID(id)) return next();
    const message='ID invalido en consulta por parametro';
    throw new ClientError(message, 400);
}
function isValidMongoDBUUID(id){
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}