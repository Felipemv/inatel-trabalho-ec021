exports.login = (req, res) => {
    const { username, password } = req.body

    console.log(`Login: \n - Username: ${username}\n - Password: ${password}`)


    res.send({
        username: username,
        password: password
    })
}

exports.token = (req, res) => {
    console.log('Token')
}