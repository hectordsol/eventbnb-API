const {catchedAsync}= require('../utils');

module.exports={
    getUsuarios  : catchedAsync(require('./getUsuarios')),
    getUsuario   : catchedAsync(require('./getUsuario')),
    createUsuario: catchedAsync(require('./createUsuario')),
    changeUsuario: catchedAsync(require('./changeUsuario')),
    deleteUsuario: catchedAsync(require('./deleteUsuario')),
}