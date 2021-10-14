const express = require('express')

const categoryController = require('../controllers/CategoryController')

const router = express.Router()

router.get('/', categoryController.sortFood);


// router.get('/', categoryController.viewCategories);

//url = /api/categories/categories_name/:search
router.get('/categories_name/:search',categoryController.findCategory);



router.delete('/:id', categoryController.delete);



module.exports = router