const express = require("express");
const routerVenda = express.Router();

const Venda = require('../controllers/venda');

routerVenda.get('/', Venda.teste);
routerVenda.post('/venda/criar', Venda.criar);
routerVenda.get('/venda/listar', Venda.listar);
routerVenda.get('/venda/listar/:id', Venda.listar);
routerVenda.put('/venda/alterar/:id', Venda.alterar);
routerVenda.delete('/venda/excluir/:id', Venda.excluir);

module.exports = routerVenda