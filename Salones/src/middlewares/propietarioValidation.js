const Usuario = require('../../../Usuarios/src/data');
const { response } = require('../utils');
module.exports= async(req,res,next)=>{
    const {propietario}=req.body;
    const usuarioEncontrado = await Usuario.get(propietario);
    if(usuarioEncontrado) return next();
    else response(res,400,'Error id usuario propietario no encontrado');
}