const {catchedAsync} = require('../utils');

module.exports = {
    getReservas : catchedAsync(require('./getReservas')),
    createReserva : catchedAsync(require('./createReservas'))
}