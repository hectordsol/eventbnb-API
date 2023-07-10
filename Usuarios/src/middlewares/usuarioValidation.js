const Usuario = require('../data');
const {ClientError} =require('../utils/errors')
module.exports= async(req,res,next)=>{
    const {nombre,apellido,email,password}=req.body;
    console.log(email, password);
    //if(nombre && apellido) return next();
    let message='';
    let user = {};
    // const validator = new EmailValidator(email);
    // msgError = validator.validate();
    user = await Usuario.getByEmail(email);
    console.log("usuario: ",user);
    if (user) {
        // const verify = comparePassword(user.password, password);
        let verify = false; // cambiar
        if (password === user.password) verify = true; // cambiar
        if (verify) { // 'LOGUEADO'            
            next();
        } else {
            message = 'credenciales invalidas';
        }
    } else { // 'REGISTRAR USER'
        next();
    }
    // if (!nombre || nombre.length > 20) message='Error en el nombre. ';
    // if (!apellido || apellido.length > 20) message=message + 'Error en el apellido. ';
    throw new ClientError(message, 401);

}