const Router = require('restify-router').Router
const authController = require('../controller/auth')

var authRouter = new Router()

authRouter.post('/login', authController.login)
authRouter.post('/token', authController.token)

module.exports = authRouter