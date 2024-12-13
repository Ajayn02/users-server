const express = require('express')
const userController = require('../Controllers/userController')
const jwtMiddle = require('../middlewares/jwtMiddleware')

const route = express.Router()

route.post('/adduser', userController.registerUser)
route.get('/allusers', userController.getAllUsers) //add query parameter to get filtered values == ?search=ajay
route.delete('/deluser/:id', jwtMiddle, userController.deleteUser)
route.put('/edituser/:id', jwtMiddle, userController.editUser)
route.post('/log', userController.userLogin)

module.exports = route
