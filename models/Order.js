const { connection } = require("../config/database");



module.exports.viewOrder = function viewFood(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT foods.*, orders.* FROM orders INNER JOIN foods ON orders.food_id = foods.id ORDER BY orders.id;", function(error, result){
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


//search orders by customer_name
module.exports.findOrder = (search)=>{
    return new Promise((resolve, reject)=>{
        connection.query("SELECT foods.*, orders.* FROM orders INNER JOIN foods ON orders.food_id = foods.id WHERE customer_name LIKE ?", search, function (error, result){
            if(error){
                reject(error);
            }else{
                if (result.length > 0) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        });
    })
}

module.exports.statistical = (year, month) =>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT (SUM((orders.quantity*foods.price)/1000)) as total FROM orders INNER JOIN foods ON orders.food_id = foods.id WHERE YEAR(orders.order_date) = ? AND MONTH(orders.order_date) = ?", [year, month], function (error, result){
            if (error) {
                reject(error);
            }else{
                if (result.length > 0) {
                    resolve(result[0]);
                } else {
                    resolve(null);
                }
            }
        });
    });
} 


