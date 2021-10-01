const express = require('express')

const foodController = require('../controllers/FoodController')

const router = express.Router()

router.get('/',foodController.viewFood);
router.post('/', foodController.findFood);

// router.post('/add',foodController.add);


module.exports = router