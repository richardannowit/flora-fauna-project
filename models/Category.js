const { connection } = require("../config/database");

//view all Categories
module.exports.viewCategories = function viewCategories() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM categories", function (error, result) {
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

//search all Categories by category name
module.exports.findCategories = (search) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM categories WHERE category_name LIKE ?", search, (error, result) => {
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

module.exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories WHERE id = ?', id, (error, result) => {
            if (error) {
                reject(error);
            } else {
                result = JSON.parse(JSON.stringify(result))
                resolve(result[0]);
            }
        });
    })
}



//delete categories by ID

module.exports.delete = (iddelete) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM categories WHERE id = ?', iddelete, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}


module.exports.create = (category) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO categories SET ?', category, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(category);
            }
        });
    })
}
module.exports.update = (category, id) => {
    return new Promise((resolve, reject) => {
        let sql = "UPDATE categories SET ? where id=?";
        connection.query(sql, [category, id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(category);
            }
        });
    })
}