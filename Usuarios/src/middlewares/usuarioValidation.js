const {ClientError} =require('../utils/errors')
module.exports= (req,res,next)=>{
    const {nombre,apellido,email}=req.body;
    if(nombre && apellido && esEmail(email)) return next();
    let message='';
    if (!nombre || nombre.length > 20) message='Error en el nombre. ';
    if (!apellido || nombre.length > 20) message=message + 'Error en el apellido. ';
    if (!esEmail(email)) message=message+ 'Correo no valido.';
    throw new ClientError(message, 401);

}
function esEmail(email){
return email.match
    (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}