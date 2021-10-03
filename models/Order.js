const { connection } = require("../config/database");



module.exports.viewOrder = function viewFood(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM orders ", function(error, result){
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
