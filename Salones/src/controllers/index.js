const {catchedAsync}= require('../utils');

module.exports={
    getSalones  : catchedAsync(require('./getSalones')),
    getSalon   : catchedAsync(require('./getSalon')),
    createSalon: catchedAsync(require('./createSalon')),
    changeSalon: catchedAsync(require('./changeSalon')),
    deleteSalon: catchedAsync(require('./deleteSalon')),
}