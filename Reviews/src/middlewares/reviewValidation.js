const {ClientError} =require('../utils/errors')
module.exports= (req,res,next)=>{
    const {comentario}=req.body;
    if(comentario) return next();
    else throw new ClientError('Comentario no debe venir vacio', 401);

}