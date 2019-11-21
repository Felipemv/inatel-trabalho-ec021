require('dotenv').config()

const restify = require('restify')
const mongoose = require('mongoose')
// const bodyParser = require

const DB = require('./database/config')

const authRoutes = require('./routes/auth')
const memeRoutes = require('./routes/meme')

const PORT = process.env.PORT || 3000

var server = restify.createServer()
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser());

authRoutes.applyRoutes(server)
memeRoutes.applyRoutes(server, '/meme')

mongoose.connect(DB.DB_URL, DB.DB_SETTINGS, (err) => {
    if(!err) {
        console.log(`Conectado ao banco de dados ${DB.DB_SETTINGS.dbName}`)
    } else {
        console.log(`Erro ao conectar ao banco de dados => ${err}`)
    }
})

server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})