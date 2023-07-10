
const Usuario = require('../data');
const { ClientError } = require('../utils/errors')
// const { EmailValidator } = require('../validators');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    let msgError = '';
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
            msgError = 'credenciales invalidas';
        }
    } else { // 'REGISTRAR USER'
        next();
    }
    console.log("MENSAJE: ", msgError);
    if (msgError) throw new ClientError(msgError, 401);
}
