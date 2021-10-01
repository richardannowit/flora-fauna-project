const { connection } = require("../config/database");


module.exports.viewFood = function viewFood(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM foods", function(error, result){
            if (error) {
                reject(error);
            }else{
                if (result.length > 0) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        })
    })
}


module.exports.findFood = (search)=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM foods WHERE food_name LIKE ?", search, (error, result)=>{
            if(error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}


module.exports.createFood = function createFood(newFood) {

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

