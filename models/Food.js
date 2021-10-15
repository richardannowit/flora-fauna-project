const { connection } = require("../config/database");


module.exports.viewFood = function viewFood(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT foods.*, categories.* FROM foods INNER JOIN categories ON foods.category_id = categories.id ORDER BY foods.id;", function(error, result){
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
        connection.query("SELECT foods.*, categories.* FROM foods INNER JOIN categories ON foods.category_id = categories.id  WHERE foods.food_name LIKE ?;", search, (error, result)=>{
            if(error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

module.exports.findFoodID = (search)=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT foods.*, categories.* FROM foods INNER JOIN categories ON foods.category_id = categories.id  WHERE foods.category_id LIKE ?;", search, (error, result)=>{
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



// get sort by quantity purchased

module.exports.sortQuantity = (limit) =>{
    return new Promise((resolve, reject)=>{
        connection.query("SELECT f.*, cn.* FROM foods as f LEFT JOIN (SELECT o.food_id, COUNT(*) as cnt FROM orders as o GROUP BY o.food_id) AS cn on cn.food_id = f.id ORDER BY `cn`.`cnt` DESC LIMIT ?", limit, function (error, result){
            if (error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}
