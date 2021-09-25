const { connection } = require("../config/database");

var Food = {}

User.createFood = function createFood(newFood) {

    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO foods SET ?", newFood, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    })

}

module.exports = Food;