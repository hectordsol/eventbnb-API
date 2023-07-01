const User = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const user = await User.remove(id);
    let statusCode;
    user?statusCode=200:statusCode=404;
    response(res, statusCode, user);
}