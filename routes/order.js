const { Router } = require('express')
const express = require('express')

const orderController = require('../controllers/OrdersController')

const router = express.Router()

router.get('/', orderController.viewOrder)

router.get('/customer_name/:search', orderController.findOrder);//search

router.get('/statistic/:year', orderController.statistical);//search

// /orders/year/:year

module.exports = router