const axios = require('axios')
require('dotenv').config()

//Função de Login do usuario
exports.login = (req, res) => {
    
    console.log('Login')
    // console.log(req.body)

    const { username, password } = req.body
    // console.log(`Usuario ${username} e senha ${password}`)

    let url = process.env.AUTH_SERVER + 'login'
    let postData = { username, password }
    let axiosConfig = {}

    axios.post(url, postData, axiosConfig)
        .then(sucess => {
            console.log(sucess.data)
            // res.send(200, JSON.stringify(sucess.data))
            res.json(sucess.data)
        })
        .catch(err => {
            console.log(err)
            res.send("Login inválido")
        })

    
}

//Função de verificação de token - apenas para teste
exports.token = (req, res) => {
    console.log('Token')

    const { token } = req.headers
    // console.log(token)

    let url = process.env.AUTH_SERVER + 'validateToken'
    let postData = {}
    let axiosConfig = {
        headers: {
            token
        }
    }

    axios.post(url, postData, axiosConfig)
        .then(sucess => {
            console.log(sucess.data)
            res.send(200, sucess.data)
        })
        .catch(err => {
            console.log(err.data)
            res.send("Token invalido")
        })
}

//Função de midleware para validação token
exports.verifyJWT = async (req, res, next) => {
    const { token } = req.headers
    console.log(`Verificação de token: ${token}`)

    if(token == null) {
        return res.send(403, { Erro: 'Token não fornecido' })
    }

    let url = process.env.AUTH_SERVER + 'validateToken'
    let postData = {}
    let axiosConfig = {
        headers: {
            token
        }
    }

    await axios.post(url, postData, axiosConfig)
        .then(sucess => {
            console.log(sucess.data)
            next()
        })
        .catch(err => {
            console.log(err.data)
            res.send(401, { Erro: "Token inválido" })
        })
}