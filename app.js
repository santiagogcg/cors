const express = require("express")
const axios = require("axios")
const app = express()


app.get('/characters/:name', async (req, res) => {
    const name = req.params.name
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    try {

        const response = await axios.get(url)
        const { name, sprites: { front_default }, height, weight } = response.data

        res.json({ name, sprites: { front_default }, height, weight })

    } catch (ERROR) {

        res.status(404).json({ error: 'pokemon no encontrado' })
    }




})



app.listen(5000, () => {
    console.log('Escuchando puerto 5000')


})