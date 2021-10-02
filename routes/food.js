const express = require('express')

const foodController = require('../controllers/FoodController')

const router = express.Router()



router.get('/', foodController.viewFood);


router.get('/food_name/:search', foodController.findFood);//search




module.exports = router