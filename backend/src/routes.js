const express = require('express');
const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/usuario/', async (request, response) => {

    // receber os parametros da requisição
    const {nome, email, telefone} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('usuario').insert(
       {
          id,
          nome,
          email,
          telefone
       }
    )

    return response.send('Usuário ' + id + ' foi inserido com sucesso total!');
});

routes.post('/filmes/', async (request, response) => {

    // receber os parametros da requisição
    const {nome, ano_lancamento} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    // inserir os dados no banco de dados
    await connection('filme').insert(
       {
          id,
          nome,
          ano_lancamento
       }
    )

    return response.json({id});
});

routes.get('/usuario', async (request, response) => {
    const usuarios = await connection('usuario').select('*');

    return response.json(usuarios);
})

module.exports = routes;