const Usuario = require('../data');
const {ClientError} =require('../utils/errors')
module.exports= async (req,res,next)=>{
    let message='';
    let data={};
    const {email}=req.body;
    if(esEmail(email)) 
        data = await Usuario.getByEmail(email);
    console.log("chequeo de Email: ",data);
    if(data) message="Usuario ya existe";
    if (!email) message='Email en blanco. ';
    if (email.trim() ==="") message='Email sin datos. ';
    if (!esEmail(email)) message=message+ 'Correo no valido.';
    console.log("MENSAJE: ", message);
    if(message) throw new ClientError(message, 401);
    next();
}
function esEmail(email){
return email.match
    (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}