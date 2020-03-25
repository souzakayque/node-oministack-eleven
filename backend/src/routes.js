const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);
    
    return response.json({
        success: true,
        message: 'Servidor rodando na porta 3333'
    });
});

module.exports = routes;