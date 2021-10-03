const { Router } = require('express')
const express = require('express')

const orderController = require('../controllers/OrdersController')

const router = express.Router()

router.get('/', orderController.viewOrder)

// router.get('/', orderController.findOrder)

module.exports = router