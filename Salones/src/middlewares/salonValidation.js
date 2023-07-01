const {ClientError} =require('../utils/errors')
module.exports= (req,res,next)=>{
    const {nombre}=req.body;
    if(nombre) return next();
    else throw new ClientError('Error en el nombre de salon', 401);

}