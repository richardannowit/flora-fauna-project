const express = require('express')

const foodController = require('../controllers/FoodController')

const router = express.Router()
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'Food_' + Date.now() + '_' + file.originalname)
    }
})
var upload = multer({ storage: storage })




router.get('/', foodController.sortQuantity);

router.get('/food_name/:search', foodController.findFood);//search
router.get('/id_category/:search', foodController.findFoodID);//search


router.post('/', upload.single('file'), foodController.create);
router.put('/:id', upload.single('file'), foodController.update);

router.delete('/:id', foodController.delete);

module.exports = router