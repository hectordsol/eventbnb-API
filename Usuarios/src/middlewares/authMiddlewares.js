
const Usuario = require('../data');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors')
// const { EmailValidator } = require('../validators');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    let message = '';
    let user = {};
    // const validator = new EmailValidator(email);
    // msgError = validator.validate();
    user = await Usuario.getByEmail(email);
    if (user) 
    {
        // const verify = comparePassword(user.password, password);
        let verify = false; // cambiar
        if (password === user.password) verify = true; // cambiar
        if (verify) { // 'LOGUEADO'
            console.log("loguin valido");        
            return next();
        } 
        else {
            console.log("contraseña mal validando");
            message = 'credenciales invalidas';
            return response(res,409,message);
        }
    } 
    else { // 'REGISTRAR USER'
        console.log("crear usuario validando")
        return next();
    }
}
