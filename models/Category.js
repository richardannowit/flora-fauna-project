const { connection } = require("../config/database");

//view all Categories
module.exports.sortById = (limit, offset) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM categories ORDER BY id DESC LIMIT ? OFFSET ?";
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
module.exports.sortByFood = (limit, offset) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT c.*, cn.cnt 
                    FROM categories as c 
                    LEFT JOIN (SELECT f.category_id, COUNT(*) as cnt FROM foods as f GROUP BY f.category_id) AS cn 
                    ON cn.category_id = c.id 
                    ORDER BY cn.cnt DESC LIMIT ? OFFSET ?`
        connection.query(sql, [limit, offset], function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
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

module.exports.findByName = (name) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories WHERE category_name = ?', name, (error, result) => {
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


// get sort by food



module.exports.create = (category) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO categories SET ?', category, (error, result) => {
            if (error) {
                reject(error);
            } else {
                result = JSON.parse(JSON.stringify(result))
                let res = {
                    ...category,
                    'id:': result.insertId
                }
                resolve(res);
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
