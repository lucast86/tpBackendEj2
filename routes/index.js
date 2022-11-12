const express = require('express')   
const routes = express.Router()  

const { userControllers } = require('../controllers')  
const { requiredParameters } = require('../middlewares')


routes.get('/user/:ID', userControllers.getUser)
routes.get('/users', userControllers.getUsers)
routes.post('/users', requiredParameters, userControllers.createUsers)
routes.put('/users/:ID', userControllers.updateUsers)
routes.delete('/users/:ID', userControllers.deleteUsers)

module.exports = routes