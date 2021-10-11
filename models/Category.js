const { connection } = require("../config/database");

//view all Categories
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

//search all Categories by category name
module.exports.findCategories = (search)=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM categories WHERE category_name LIKE ?", search, (error, result)=>{
            if(error) {
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


//delete categories by ID

module.exports.delete = (iddelete) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM categories WHERE id = ?', iddelete , (error, result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    })
}
