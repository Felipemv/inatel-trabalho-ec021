const axios = require('axios')

exports.login = (req, res) => {
    
    console.log('Login')
    // console.log(req.body)

    const { username, password } = req.body
    // console.log(`Usuario ${username} e senha ${password}`)

    let url = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/login'
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

exports.token = (req, res) => {
    console.log('Token')

    const { token } = req.headers
    // console.log(token)

    let url = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/validateToken'
    let postData = {}
    let axiosConfig = {
        headers: {
            token
        }
    }

    axios.post(url, postData, axiosConfig)
        .then(sucess => {
            console.log(sucess.data)
            res.send("Token valido")
        })
        .catch(err => {
            console.log(err.data)
            res.send("Token invalido")
        })

    

}