const axios = require('axios')

const Meme = require('../models/meme')

module.exports = {
    async search(req, res) {
        console.log("Buscar meme")

        const { id } = req.params
        console.log(id)

        let meme

        if(id) {
            meme = await Meme.findById(id)
            console.log(`Meme encontrado ${meme.titulo}`)
        } else {
            meme = await Meme.find()
            console.log(`${meme.length} memes encontrados`)
        }

        // res.send(200)
        res.json(meme)
    }
}