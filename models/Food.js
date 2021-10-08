const { connection } = require("../config/database");


module.exports.viewFood = function viewFood(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT foods.id, foods.food_name, foods.price,foods.image_name, foods.description, categories.category_name FROM foods INNER JOIN categories ON foods.category_id = categories.id ORDER BY foods.id;", function(error, result){
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
        connection.query("SELECT foods.id, foods.food_name, foods.price,foods.image_name, foods.description, categories.category_name FROM foods INNER JOIN categories ON foods.category_id = categories.id  WHERE foods.food_name LIKE ?;", search, (error, result)=>{
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


module.exports.delete = (iddelete) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM foods WHERE id = ?', iddelete , (error, result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    })
}

