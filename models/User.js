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
        connection.query("SELECT * FROM users WHERE username=?", username, function (error, result) {
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
            connection.query("INSERT INTO users SET ?", newUser, function (error, result) {
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

//view all User
module.exports.viewUser = (limit, offset) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT id, username, first_name, last_name, email, phone 
                    FROM users ORDER BY id DESC LIMIT ? OFFSET ?`;
        connection.query(sql, [limit, offset], function (error, result) {
            if (error) {
                reject(error);
            } else {
                if (result.length > 0) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        })
    })
}

// search user by username
module.exports.findUserName = (search) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT id, username, first_name, last_name, email, phone  FROM users WHERE username LIKE ?", search, (error, result) => {
            if (error) {
                reject(error);
            } else {
                if (result.length > 0) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        })
    })
}

// search user by ID
module.exports.findUserID = (search) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT id, username, first_name, last_name, email, phone FROM users WHERE id LIKE ?", search, (error, result) => {
            if (error) {
                reject(error);
            } else {
                if (result.length > 0) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        })
    })
}

module.exports.update = (user, id) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE users SET ? where id=?';
        connection.query(sql, [user, id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}



//delete user by ID

module.exports.delete = (iddelete) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM users WHERE id = ?', iddelete, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}


