
const Usuario = require('../data');
const { ClientError } = require('../utils/errors')
// const { EmailValidator } = require('../validators');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    let message = 'login';
    let user = {};
    // const validator = new EmailValidator(email);
    // msgError = validator.validate();
    user = await Usuario.getByEmail(email);
    console.log("usuario: ",user);
    if (user) 
    {
        // const verify = comparePassword(user.password, password);
        let verify = false; // cambiar
        if (password === user.password) verify = true; // cambiar
        if (verify) { // 'LOGUEADO'           
            return next(message);
        } 
        else {
            message = 'credenciales invalidas';
            return next(message);
        }
    } 
    else { // 'REGISTRAR USER'
        message='create';
        return next(message);
    }
    console.log("MENSAJE: ERROR");
//    if(message) throw new ClientError(message, 401);
}
