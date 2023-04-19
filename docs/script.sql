DROP DATABASE IF EXISTS avaliacao;
CREATE DATABASE avaliacao;

USE avaliacao;

CREATE TABLE vendedores(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(153) NOT NULL,
    matricula VARCHAR(10) NOT NULL 
);

CREATE TABLE produtos(
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     nome VARCHAR(153) NOT NULL,
     valor_venda FLOAT(6,2)
);

CREATE TABLE vendas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    quantidade INT NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    FOREIGN KEY (vendedorId) REFERENCES vendedores(id) ON DELETE CASCADE,
    FOREIGN KEY (produtoId) REFERENCES produtos (id) ON DELETE CASCADE
);

INSERT INTO vendedores (nome, matricula) VALUES ('João', '12345');
INSERT INTO vendedores (nome, matricula) VALUES ('Pedro', '98765');
INSERT INTO vendedores (nome, matricula) VALUES ('Ana', '11111');
INSERT INTO vendedores (nome, matricula) VALUES ('Maria', '54321');
INSERT INTO vendedores (nome, matricula) VALUES ('Lucas', '22222');

INSERT INTO produtos (nome, valor_venda) VALUES ('Blusa de Frio', 79.99);
INSERT INTO produtos (nome, valor_venda) VALUES ('Bermuda Estampada', 39.90);
INSERT INTO produtos (nome, valor_venda) VALUES ('Tênis Esportivo', 149.99);
INSERT INTO produtos (nome, valor_venda) VALUES ('Calça Jeans', 99.90);
INSERT INTO produtos (nome, valor_venda) VALUES ('Camiseta Branca', 29.99);

INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('2022-01-01', 2, 1, 1);
INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('2022-02-15', 5, 2, 3);
INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('2022-03-10', 1, 3, 2);
INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('2022-04-22', 3, 2, 4);
INSERT INTO vendas (data, quantidade, produtoId, vendedorId) VALUES ('2022-05-15', 1, 4, 5);
