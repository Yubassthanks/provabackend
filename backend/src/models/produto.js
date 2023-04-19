class Produtos {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.valor_venda = i.valor_venda
    }

    create() {
        return `INSERT INTO produtos (nome, valor_venda) VALUES ('${this.nome}', ${this.valor_venda})`;
      }
      
    read() {
        if (this.id == undefined)
            return `SELECT * FROM produtos`
        else
            return `SELECT * FROM produtos WHERE id = '${this.id}'`
    }

    update(id) {
        return `UPDATE produtos SET nome = '${this.nome}', valor_venda = '${this.valor_venda}' WHERE id = '${id}'`
    }

    delete() {
        return `DELETE FROM produtos WHERE id = '${this.id}'`
    }
}

module.exports = Produtos