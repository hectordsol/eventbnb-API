const {catchedAsync}= require('../utils');

module.exports={
    getReviews  : catchedAsync(require('./getReviews')),
    getReview   : catchedAsync(require('./getReview')),
    createReview: catchedAsync(require('./createReview')),
    changeReview: catchedAsync(require('./changeReview')),
    deleteReview: catchedAsync(require('./deleteReview')),
}