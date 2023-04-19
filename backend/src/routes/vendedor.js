const express = require("express");
const routerVendedor = express.Router();

const Vendedor = require('../controllers/vendedor');

routerVendedor.get('/', Vendedor.teste);
routerVendedor.post('/vendedor/criar', Vendedor.criar);
routerVendedor.get('/vendedor/listar', Vendedor.listar);
routerVendedor.get('/vendedor/listar/:id', Vendedor.listar);
routerVendedor.put('/vendedor/alterar/:id', Vendedor.alterar);
routerVendedor.delete('/vendedor/excluir/:id', Vendedor.excluir);

module.exports = routerVendedor