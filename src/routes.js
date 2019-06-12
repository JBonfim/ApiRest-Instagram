const express = require('express');

const routes = new express.Router();

routes.get('/',(req,resp) => {
    return resp.send(`Teste ${req.query.name}`);
});

module.exports = routes;