const { connection } = require("../config/database");


module.exports.viewCategories = function viewCategories(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM categories", function(error, result){
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


module.exports.findCategories = (search)=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM categories WHERE category_name LIKE ?", search, (error, result)=>{
            if(error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

