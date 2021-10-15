const { connection } = require("../config/database");


module.exports.viewFood = function viewFood() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT foods.*, categories.category_name FROM foods INNER JOIN categories ON foods.category_id = categories.id ORDER BY foods.id;", function (error, result) {
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


module.exports.findFood = (search) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT foods.*, categories.category_name FROM foods INNER JOIN categories ON foods.category_id = categories.id  WHERE foods.food_name LIKE ?;", search, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports.findFoodID = (search) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT foods.*, categories.category_name FROM foods INNER JOIN categories ON foods.category_id = categories.id  WHERE foods.category_id LIKE ?;", search, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT foods.*, categories.category_name FROM foods INNER JOIN categories ON foods.category_id = categories.id WHERE foods.id = ?', id, (error, result) => {
            if (error) {
                reject(error);
            } else {
                result = JSON.parse(JSON.stringify(result))
                resolve(result[0]);
            }
        });
    })
}


module.exports.create = (newFood) => {

    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO foods SET ?", newFood, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(newFood);
            }
        });
    })

}

module.exports.update = (food, id) => {

    return new Promise((resolve, reject) => {
        let sql = "UPDATE foods SET ? where id=?";
        connection.query(sql, [food, id], function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(food);
            }
        });
    })

}


module.exports.delete = (iddelete) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM foods WHERE id = ?', iddelete, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}

