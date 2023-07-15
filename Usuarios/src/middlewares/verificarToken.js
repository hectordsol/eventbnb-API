const { response } = require('../utils');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = "elsecreto";

module.exports = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];    
    if (!token) {
        return response(res,401,"Sin Token");
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return response(res,403,"Error de Token");
        }
        res.user=user;
        return next();
        }
    )
}
