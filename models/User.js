const { connection } = require("../config/database");
const bcrypt = require('bcrypt')

var User = {}


User.hidePassword = (user) => {
    let userFilter = {
        ...user,
        password: 'null'
    }
    delete userFilter.password;
    return userFilter;
}

User.findUser = (username) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM USERS WHERE username=?", username, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                if (result.length > 0) {
                    resolve(result[0]);
                } else {
                    resolve(null);
                }

            }
        });
    });

}


User.createUser = function createUser(newUser) {

    return new Promise((resolve, reject) => {
        bcrypt.hash(newUser.password, 10, (error, hash) => {
            newUser.password = hash
            connection.query("INSERT INTO USERS set ?", newUser, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(newUser);
                }
            });
        })
    })


}

module.exports = User;