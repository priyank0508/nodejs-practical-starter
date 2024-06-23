const jwt = require('jsonwebtoken');

module.exports.authMiddleware = (req,res,next) => {
    let authorization = req.header.authorization

    if (authorization) {
        authorization = authorization.split('Bearer ')[1]
        if(!authorization){
            return res.send({ statusCode: 401, message: 'Token is required.', data: [] })
        }

        const verifyToken = jwt.verify(authorization, process.env.SECRET_KEY)
        /**
         * Check user exist in db or not if exixt then next() other wise return error
         */
    } else {
        return res.send({ statusCode: 401, message: 'Token is required.' })
    }
}