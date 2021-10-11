const category = require('../models/Category')

module.exports.viewCategories = async (req, res) => {
    try {
        const categories = await category.viewCategories();
        if(categories){
            res.status(200).json({
                data: categories
            });
        }
        else{
            res.json({
                message: "Can't not find category"
            })
        }
    }catch(err) {
        console.error(err);
    }
}

module.exports.findCategory = async (req, res)=>{
    try{
        const search = req.params.search;
        const categories = await category.findCategories(`%${search}%`);
        if(categories != null){
            res.status(200).json({
                data: categories
            });
        }else{
            res.status(200).json({
                data:[]
            })
        }
    }catch(err) {
        console.error(err);
    }
}


module.exports.delete = async (req, res) => {
    const id = req.params.id;
    try{
        const categorys = await category.delete(id);
        res.status(200).json({
            message: 'Category delete successfull'
        })
    }catch(err) {
        console.log(err);
    }
}
