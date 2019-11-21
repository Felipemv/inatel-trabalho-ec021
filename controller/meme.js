const axios = require('axios')

const Meme = require('../models/meme')

module.exports = {
    //Função de inserção de meme no banco
    async insert(req, res) {
        console.log('Insere meme')

        const { titulo, descricao, ano } = req.body

        const meme = await Meme.create({
            titulo,
            descricao,
            ano
        })

        console.log(meme)
        res.send(201, meme)
    },

    //Função de atualização de meme no banco
    async update(req, res) {
        console.log('Atualiza meme')

        const { titulo, descricao, ano } = req.body
        const { id } = req.params

        const response = await Meme.updateOne({ _id: id }, {
            titulo,
            descricao,
            ano
        })

        // console.log(response)

        if(response.nModified == 1 && response.ok == 1) {
            console.log(`${titulo} foi atualizado`)
            const meme = await Meme.findById(id)
            return res.send(200, meme)
        }

        res.send(400)
    },

    //Função de procura de memes no banco
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
    },

    //Função de exclusão de meme no banco
    async delete(req, res) {
        console.log('Exclui meme')

        const { id } = req.body

        const response = await Meme.deleteOne({ _id: id })

        if(response.deletedCount == 1 && response.ok == 1) {
            console.log(`${id} removido`)
            return res.send(204)
        }
    }
}