const jwtHelper = require("../helpers/jwt.helper");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

let isAuth = async (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    if (token) {
        try {
            const decoded = await jwtHelper.verifyToken(token, accessTokenSecret);
            req.jwtDecoded = decoded;
            next();
        } catch (error) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }
    } else {
        return res.status(403).send({
            message: 'No token provided.',
        });
    }
}
module.exports = {
    isAuth: isAuth,
};
