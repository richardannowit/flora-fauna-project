const express = require('express')

const contactController = require('../controllers/ContactController')

const router = express.Router()

router.get('/', contactController.viewContact);
router.post('/', contactController.create);



module.exports = router