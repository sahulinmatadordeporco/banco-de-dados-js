const express = require('express')
const {soma, subtração} = require('./teste')

const server = express()

const PORT = 8000

server.get('/soma', (req, res) => {
    resultado = soma; req.query.a, req.query.b
})
server.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})