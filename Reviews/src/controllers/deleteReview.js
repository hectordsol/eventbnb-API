const Review = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const review = await Review.remove(id);
    let statusCode;
    review?statusCode=200:statusCode=404;
    response(res, statusCode, review);
}