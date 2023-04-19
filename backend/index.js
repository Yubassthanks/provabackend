const express = require('express')
const cors = require('cors')

const routerVendedor = require('./src/routes/vendedor')
const routerProduto = require('./src/routes/produto')
const routerVenda = require('./src/routes/venda')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', routerVendedor)
app.use('/', routerProduto)
app.use('/', routerVenda)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})