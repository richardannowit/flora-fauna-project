const jwt = require("jsonwebtoken");

let createToken = (user, token_key, expire) => {
    return new Promise((resolve, reject) => {
        // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
        const userData = {
            _id: user._id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            role: user.role
        }
        // Thực hiện ký và tạo token
        jwt.sign(
            { data: userData },
            token_key,
            {
                algorithm: "HS256",
                expiresIn: expire,
            },
            (error, token) => {
                if (error) {
                    return reject(error);
                }
                resolve(token);
            });
    });
}

let verifyToken = (token, token_key) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, token_key, (error, decoded) => {
            if (error) {
                return reject(error);
            }
            resolve(decoded);
        });
    });
}
module.exports = {
    createToken: createToken,
    verifyToken: verifyToken,
};