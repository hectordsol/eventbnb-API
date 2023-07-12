const Review = require('../data');
const {response} = require('../utils');

module.exports = async (req, res) => {
    const review = await Review.list();
    response(res, 200, review);
}