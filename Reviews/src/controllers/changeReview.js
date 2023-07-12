const Review = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const {id} = req.params;    
    const review = req.body;
    const changedReview = await Review.change(id,review);
    let statusCode;
    changedReview?statusCode=200:statusCode=404;
    response(res, statusCode, changedReview);
}