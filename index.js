require('dotenv').config()

const restify = require('restify')
const bodyParser = require

const authRoutes = require('./routes/auth')

const PORT = process.env.PORT || 3000

var server = restify.createServer()
server.use(restify.plugins.bodyParser())

authRoutes.applyRoutes(server)

server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})