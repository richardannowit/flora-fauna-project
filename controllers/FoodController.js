const upload  = require('../helpers/upload.helper');
const food = require('../models/Food');


module.exports.viewFood = async (req, res) => {
    try {
        const foods = await food.viewFood();
        if(foods){
            res.status(200).json({
                data: foods
            });
        }
        else{
            res.json({
                message: "Can't not find food"
            })
        }
      
    }catch(err) {
        console.error(err);
    }
}

module.exports.findFood = async (req, res) => {
    const search = req.params.search;
    try{
        const foods = await food.findFood(`%${search}%`);
        // const foods = await food.findFood(`%${search}%`);

        if(foods.length > 0){
            res.status(200).json({
                data: foods
            });
        }else{
            res.status(200).json({
                data:[]
            })
        }
    }catch(err) {
      console.log(err);
    }
}


module.exports.findFoodID = async (req, res) => {
    const search = req.params.search;
    try{
        const foods = await food.findFoodID(`%${search}%`);
        // const foods = await food.findFood(`%${search}%`);

        if(foods.length > 0){
            res.status(200).json({
                data: foods
            });
        }else{
            res.status(200).json({
                data:[]
            })
        }
    }catch(err) {
      console.log(err);
    }
}


module.exports.delete= async (req, res) => {
    const id = req.params.id;
    try{
        const foods = await food.delete(id);
        res.status(200).json({
            message: 'Food delete successfull'
        })
    }catch(err) {
        console.log(err);
    }
}


module.exports.addFood = async (req, res) => {
    try {
        const { food_name,price, description, image_name} = req.body;

        if (!(food_name && price && description && image_name)) {
            res.status(400).json({
                message: "All input is required"
            });
        }

        const oldFood = await food.findFood(food_name);

        if (oldFood) {
            return res.status(409).json({
                message: "Food already Exist. Please enter another food name"
            });
        }
        let path = req.file.path.split('\\').slice(2).join('\\');
        const newFood = await food.createFood({
            food_name,
            price,
            description,
            image_name
        });

        // return new user
        res.status(201).json({
            message: 'Food created successfull'
        });
    } catch (err) {
        console.log(err);
    }
}

