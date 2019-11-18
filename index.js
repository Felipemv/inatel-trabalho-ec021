const restify = require('restify')

const authRoutes = require('./routes/auth')

const PORT = process.env.PORT || 9000

var server = restify.createServer()

authRoutes.applyRoutes(server)

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})