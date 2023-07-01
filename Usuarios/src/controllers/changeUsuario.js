const User = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const user = req.body;
    const changedUser = await User.change(id,user);
    let statusCode;
    changedUser?statusCode=200:statusCode=404;
    response(res, statusCode, changedUser);
}