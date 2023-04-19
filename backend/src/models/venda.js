class Venda {

    constructor(i) {
        this.id = i.id
        this.data = i.data
        this.quantidade = i.quantidade
        this.produtoId = i.produtoId
        this.vendedorId = i.vendedorId
       
    }

    create() {
        return `INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('${this.data}', ${this.quantidade}, '${this.produtoId}','${this.vendedorId}')`;

    }


    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = '${this.id}'`
    }

    update(id) {
        return `UPDATE vendas SET data = '${this.data}', quantidade = '${this.quantidade}', produtoId = '${this.produtoId}', vendedorId = '${this.vendedorId}' WHERE id = '${id}'`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = '${this.id}'`
    }
}

module.exports = Venda