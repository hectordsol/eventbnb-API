const {catchedAsync}= require('../utils');

module.exports={
    getEventos  : catchedAsync(require('./getEventos')),
    getEvento   : catchedAsync(require('./getEvento')),
    createEvento: catchedAsync(require('./createEvento')),
    changeEvento: catchedAsync(require('./changeEvento')),
    deleteEvento: catchedAsync(require('./deleteEvento')),
}