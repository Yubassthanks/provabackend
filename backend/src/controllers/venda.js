const con = require('../dao/connect')
const Venda = require('../models/venda')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = (req, res) => {
    let venda = new Venda(req.body)
    con.query(venda.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let venda = new Venda(req.params)
    con.query(venda.read(), (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            console.log(err) // Exibe o erro no console do servidor para fins de debug
            res.status(500).send('Erro interno no servidor').end()
        }
    })
}

const alterar = (req, res) => {
    const venda = new Venda(req.body);
    const { id } = req.params;
    
    con.query(venda.update(id), (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
      } else if (result.affectedRows > 0) {
        res.status(202).send(`Venda atualizada com sucesso`);
      } else {
        res.status(404).send(`Venda não encontrada`);
      }
    })
}

const excluir = (req, res) => {
    let venda = new Venda(req.params)
    con.query(venda.delete(), (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
          } else if (result.affectedRows > 0) {
            res.status(202).send(`Venda excluida com sucesso`);
          } else {
            res.status(404).send(`Venda não encontrada`);
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