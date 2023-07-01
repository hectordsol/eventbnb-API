const User = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const user = await User.list();
    response(res, 200, user);
}