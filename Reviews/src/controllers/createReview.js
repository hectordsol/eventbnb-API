const Review = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const review = req.body;
    const newReview = await Review.create(review);
    response(res,201,newReview);
}