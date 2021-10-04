const { Router } = require('express')
const express = require('express')

const orderController = require('../controllers/OrdersController')

const router = express.Router()

router.get('/', orderController.viewOrder)

router.get('/customer_name/:search', orderController.findOrder);//search

module.exports = router