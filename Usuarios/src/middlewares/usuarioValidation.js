const {ClientError} =require('../utils/errors')
module.exports= (req,res,next)=>{
    const {nombre,apellido,email,password}=req.body;
    console.log(email, password);
    if(nombre && apellido) return next();
    let message='';
    if (!nombre || nombre.length > 20) message='Error en el nombre. ';
    if (!apellido || apellido.length > 20) message=message + 'Error en el apellido. ';
    throw new ClientError(message, 401);

}