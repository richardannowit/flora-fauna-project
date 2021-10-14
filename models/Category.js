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


// get sort by food

module.exports.sortFood = (limit) =>{
    return new Promise((resolve, reject)=>{
        connection.query("SELECT c.*, cn.* FROM categories as c LEFT JOIN (SELECT f.category_id, COUNT(*) as cnt FROM foods as f GROUP BY f.category_id) AS cn on cn.category_id ORDER BY cn.cnt DESC LIMIT ?", limit, function (error, result){
            if (error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

