const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.autorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const name = decodedToken.name;
        req.auth = {
            name: name
        };
        next()
    }
    catch(error){
        res.status(401).json({ error });
    }
}