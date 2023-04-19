const con = require('../dao/connect')
const Produto = require('../models/produto')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = (req, res) => {
    let produto = new Produto(req.body)
    console.log(produto.create())
    con.query(produto.create(), (err, result) => {
      if (err == null)
        res.status(201).end()
      else
        res.status(500).json(err).end()
    })
  }
 

const listar = (req, res) => {
    let produto = new Produto(req.params)
    con.query(produto.read(), (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            console.log(err) // Exibe o erro no console do servidor para fins de debug
            res.status(500).send('Erro interno no servidor').end()
        }
    })
}


const alterar = (req, res) => {
    const produto = new Produto(req.body);
    const { id } = req.params;
    
    con.query(produto.update(id), (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
      } else if (result.affectedRows > 0) {
        res.status(202).send(`Produto atualizado com sucesso`);
      } else {
        res.status(404).send(`Produto não encontrado`);
      }
    })
}

const excluir = (req, res) => {
    let produto = new Produto(req.params)
    con.query(produto.delete(), (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
          } else if (result.affectedRows > 0) {
            res.status(202).send(`Produto excluido com sucesso`);
          } else {
            res.status(404).send(`Produto não encontrado`);
          }
        })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}