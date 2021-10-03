const express = require('express')

const userController = require('../controllers/UserController')

const router = express.Router()



router.get('/', userController.viewUser);

// router.get('/food_name/:search', foodController.findFood);//search




module.exports = router