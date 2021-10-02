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
            res.status(501).json({
                message: "Can't not find category"
            })
        }
    }catch(err) {
        console.error(err);
    }
}

module.exports.findCategory = async (req, res)=>{
    try{
        const search = req.query.search;
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