const express = require('express')

const foodController = require('../controllers/FoodController')

const router = express.Router()



router.post('/add', foodController.add);




module.exports = router