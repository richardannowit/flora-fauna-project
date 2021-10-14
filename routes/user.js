const express = require('express')

const userController = require('../controllers/UserController')

const router = express.Router()



router.get('/', userController.viewUser);

router.get('/username/:search', userController.findUserName);//search

router.get('/user_id/:search', userController.findUserID);//search

router.delete('/:id', userController.delete);






module.exports = router