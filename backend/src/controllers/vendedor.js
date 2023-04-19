const con = require('../dao/connect')
const Vendedor = require('../models/vendedor')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = (req, res) => {
    let vendedor = new Vendedor(req.body)
    con.query(vendedor.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let vendedor = new Vendedor(req.params)
    con.query(vendedor.read(), (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            console.log(err) // Exibe o erro no console do servidor para fins de debug
            res.status(500).send('Erro interno no servidor').end()
        }
    })
}

const alterar = (req, res) => {
    const vendedor = new Vendedor(req.body);
    const { id } = req.params;
    
    con.query(vendedor.update(id), (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
      } else if (result.affectedRows > 0) {
        res.status(202).send(`Vendedor atualizado com sucesso`);
      } else {
        res.status(404).send(`Vendedor não encontrado`);
      }
    })
}

const excluir = (req, res) => {
    let vendedor = new Vendedor(req.params)
    con.query(vendedor.delete(), (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
          } else if (result.affectedRows > 0) {
            res.status(202).send(`Vendedor excluido com sucesso`);
          } else {
            res.status(404).send(`Vendedor não encontrado`);
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