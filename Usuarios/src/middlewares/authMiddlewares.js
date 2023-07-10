
const Usuario = require('../data');
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
    console.log("MENSAJE: ", message);
    if(message) throw new ClientError(message, 401);
}
