const {ClientError} =require('../utils/errors')
module.exports= (req,res,next)=>{
    const {nombre_evento}=req.body;
    if(nombre_evento) return next();
    else throw new ClientError('Error en el nombre', 401);

}