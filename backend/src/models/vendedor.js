class Vendedor {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.matricula = i.matricula
    }

    create() {
        return `INSERT INTO vendedores (nome, matricula) VALUES ('${this.nome}', ${this.matricula})`;
      }
      

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendedores`
        else
            return `SELECT * FROM vendedores WHERE id = '${this.id}'`
    }

    update(id) {
        return `UPDATE vendedores SET nome = '${this.nome}', matricula = '${this.matricula}' WHERE id = '${id}'`
    }

    delete() {
        return `DELETE FROM vendedores WHERE id = '${this.id}'`
    }
    comissao() {
        return `SELECT vendedores.nome, vendedores.matricula, 
                   SUM(vendas.quantidade * produtos.valor_venda) AS total_vendido, 
                   SUM(vendas.quantidade * produtos.valor_venda * 0.05) AS comissao
            FROM vendas
            INNER JOIN vendedores ON vendas.vendedorId = vendedores.id
            INNER JOIN produtos ON vendas.produtoId = produtos.id
            GROUP BY vendedores.id`;
    }

}

module.exports = Vendedor