const express = require('express')

const homeController = require('../controllers/HomeController')
const { isAuth } = require('../middleware/AuthMiddleware')
const { isRole } = require('../middleware/CheckRoleMiddleware')

const router = express.Router()

router.get('/', isAuth, homeController.index)
// router.get('/', homeController.index)


module.exports = router