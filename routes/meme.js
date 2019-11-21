const Router = require('restify-router').Router
const memeController = require('../controller/meme')
const authController = require('../controller/auth')

var memeRouter = new Router()

memeRouter.use(authController.verifyJWT)        //Midleware de verificação do token
memeRouter.get('/:id', memeController.search)   //Rota de listagem de meme - id opcional (com id => meme especifico, sem id => todos memes)
memeRouter.post('/', memeController.insert)     //Rota de inserção de meme
memeRouter.patch('/:id', memeController.update) //Rota de atualização de meme - id requerido 
memeRouter.del('/', memeController.delete)   //Rota de exclusão de meme


module.exports = memeRouter