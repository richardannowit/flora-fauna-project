const { connection } = require("../config/database");



module.exports.viewOrder = function viewFood(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT orders.customer_name, orders.customer_email, orders.customer_phone_number, orders.customer_address, orders.quantity, foods.food_name, foods.price FROM orders INNER JOIN foods ON orders.food_id = foods.id ORDER BY orders.id;", function(error, result){
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
        connection.query("SELECT * FROM orders WHERE customer_name LIKE ?", search, function (error, result){
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
