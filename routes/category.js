const express = require('express')

const categoryController = require('../controllers/CategoryController')

const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'Category_' + Date.now() + '_' + file.originalname)
    }
})
var upload = multer({ storage: storage })


router.get('/', categoryController.viewCategories);

//url = /api/categories/categories_name/:search
router.get('/categories_name/:search', categoryController.findCategory);

router.post('/', upload.single('file'), categoryController.create);
router.put('/:id', upload.single('file'), categoryController.update);

router.delete('/:id', categoryController.delete);



module.exports = router