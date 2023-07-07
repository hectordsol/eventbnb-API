const Usuario = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const user = req.body;
    const changedUser = await Usuario.change(id,user);
    let statusCode;
    console.log(changedUser);
    changedUser?statusCode=200:statusCode=404;
    response(res, statusCode, changedUser);
}