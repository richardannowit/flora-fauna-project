const express = require('express')

const authController = require('../controllers/AuthController')

const token_key = process.env.ACCESS_TOKEN_SECRET
const router = express.Router()



router.post('/register', authController.register)

router.post('/login', authController.login)


module.exports = router