const express = require('express')

const categoryController = require('../controllers/CategoryController')

const router = express.Router()


router.get('/', categoryController.viewCategories);

// router.get('/',categoryController.findCategory);
// router.post('/', foodController.findFood);

// router.post('/add',foodController.add);


module.exports = router