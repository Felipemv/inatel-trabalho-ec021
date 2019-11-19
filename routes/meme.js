const Router = require('restify-router').Router
const memeController = require('../controller/meme')

var memeRouter = new Router()

memeRouter.get('/meme/:id', memeController.search)


module.exports = memeRouter