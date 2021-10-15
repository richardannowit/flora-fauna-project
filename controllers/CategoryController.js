const category = require('../models/Category')
const uploadHelper = require('../helpers/upload.helper')


module.exports.viewCategories = async (req, res) => {
    try {
        const categories = await category.viewCategories();
        if (categories) {
            res.status(200).json({
                data: categories
            });
        }
        else {
            res.json({
                message: "Can't not find category"
            })
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports.findCategory = async (req, res) => {
    try {
        const search = req.params.search;
        const categories = await category.findCategories(`%${search}%`);
        if (categories != null) {
            res.status(200).json({
                data: categories
            });
        } else {
            res.status(200).json({
                data: []
            })
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports.create = async (req, res) => {
    try {
        const data = await category.create({
            'category_name': req.body.category_name,
            'image_name': req.file.filename
        });
        res.status(200).json({
            data: data,
            message: 'Category added successfull'
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }

}

module.exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.body.category_name);
        console.log(req.file ? req.file.filename : "");
        let category_name = req.body.category_name;
        let image_name = req.file ? req.file.filename : "";

        let newCategory = {};
        if (image_name == "") {
            newCategory = {
                category_name
            }
        } else {
            newCategory = {
                category_name,
                image_name
            }
        }
        await category.update(newCategory, id);
        const data = await category.findById(id);
        res.status(200).json({
            data: data,
            message: 'Category update successfull'
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }

}


module.exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const categorys = await category.delete(id);
        res.status(200).json({
            message: 'Category delete successfull'
        })
    } catch (err) {
        console.log(err);
    }
}
