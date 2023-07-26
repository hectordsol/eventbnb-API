const {catchedAsync} = require('../utils');

module.exports = {
    changeReserva : catchedAsync(require('./changeReserva')),
    createReserva : catchedAsync(require('./createReservas')),
    getReservas : catchedAsync(require('./getReservas')),
    getReserva : catchedAsync(require('./getReserva')),
}