const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/filmes', (req, res) => {
    return res.json(filmes)
});

server.listen(4000, () => {
    console.log('Servidor rodando...')
});