const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorisation');
    if (!authHeader) {
        req.isAuth = false;
    return next()
    }
    const token = authHeader.split(' ')[1];// Authorization: Bearer .. token
    if (!token || token === '') {
        req.isAuth = false;
        return next();
    }
    jwt.verify(token)
}