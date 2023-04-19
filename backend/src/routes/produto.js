const express = require("express");
const routerProduto = express.Router();

const Produto = require('../controllers/produto');

routerProduto.get('/', Produto.teste);
routerProduto.post('/produto/criar', Produto.criar);
routerProduto.get('/produto/listar', Produto.listar);
routerProduto.get('/produto/listar/:id', Produto.listar);
routerProduto.put('/produto/alterar/:id', Produto.alterar);
routerProduto.delete('/produto/excluir/:id', Produto.excluir);

module.exports = routerProduto