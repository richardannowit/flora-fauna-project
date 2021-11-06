const { connection } = require("../config/database");

//view all Categories
module.exports.sortById = (limit, offset) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM contacts ORDER BY id DESC LIMIT ? OFFSET ?";
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

module.exports.create = (category) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO contacts SET ?', category, (error, result) => {
            if (error) {
                reject(error);
            } else {
                result = JSON.parse(JSON.stringify(result))
                let res = {
                    ...category,
                    'id': result.insertId
                }
                resolve(res);
            }
        });
    })
}