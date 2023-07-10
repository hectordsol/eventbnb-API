
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
            next(message);
        } 
        else {
            message = 'credenciales invalidas';
            next(message);
        }
    } 
    else { // 'REGISTRAR USER'
        message='create';
        next(message);
    }
    console.log("MENSAJE: ERROR");
//    if(message) throw new ClientError(message, 401);
}
