const bcrypt = require('bcryptjs');
const Usuario = require('../data');
const { response } = require('../utils');

// const { EmailValidator } = require('../validators');

module.exports = async (req, res, next) => {
    const { email, password, loginGoogle } = req.body;

    console.log(email, password," login Google ?", loginGoogle);
    let message = '';
    let user = {};
    // const validator = new EmailValidator(email);
    // msgError = validator.validate();
    user = await Usuario.getByEmail(email);
    if (user) {
        if (loginGoogle) {console.log("Login GOOGLE"); return next();}
        const verify = await bcrypt.compare(password, user.password);
        console.log("VERIFY : -> ",verify);
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
