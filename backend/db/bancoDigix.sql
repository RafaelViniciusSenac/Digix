CREATE DATABASE bancoDigix;

USE bancoDigix;

CREATE TABLE usuario(
	idUsuario int not null auto_increment primary key,
	nome varchar(100) not null,
    email varchar(100) not null,
    ra varchar(20) not null,
    senha varchar(20) not null,
    saldo int default 0,
    estado enum('ativo','inativo') default "ativo",
    cargo enum('adm','usuario') not null
    
);

CREATE TABLE campanha(
	idCampanha int not null auto_increment primary key,
	nome varchar(30),
    estado enum('ativo','inativo') default "ativo",
    descricao text default null
);

CREATE TABLE produto(
	idProduto int not null auto_increment primary key,
	nome varchar(100) not null,
    imagem1 varchar(100) not null,
    imagem2 varchar(100),
	imagem3 varchar(100),
    valor int not null,
    quantidade int not null,
    tipo enum('fisico','virtual'),
    idCampanha int default null,
	foreign key (idCampanha) references campanha(idCampanha),
	estado enum('ativo','inativo') default "ativo"
    
);




CREATE TABLE desafio(
	idDesafio int not null auto_increment primary key,
    nome varchar(100) not null,
    valor int not null,
    campanha int default 0,
    dataInicio date default null,
    dataFim date default null,
    estado enum('ativo','inativo') default "ativo"
);

CREATE TABLE compra(
    idCompra int  not null auto_increment primary key,
    idUsuario int,
    foreign key (idUsuario) references usuario(idUsuario),
    total int,
    entrega enum('retirar','entrega'),
    cep varchar(10) default null,
    cidade varchar(20) default null,
    estado varchar(20) default null,
    pedido enum ('pendente','concluido') default 'pendente'

);


CREATE TABLE itensCompra(
	idItensCompra int  not null auto_increment primary key,
	idProduto int,
    foreign key (idProduto) references produto(idProduto),
	qtdProduto int,
    idCompra int,
    foreign key (idCompra) references compra(idCompra)

);

DELIMITER $$

CREATE TRIGGER atualizar_total_compra
AFTER INSERT ON itensCompra
FOR EACH ROW
BEGIN
    DECLARE v_total INT;

    -- Calcular o total para a compra associada
    SELECT SUM(i.qtdProduto * p.valor) 
    INTO v_total
    FROM itensCompra i
    JOIN produto p ON i.idProduto = p.idProduto
    WHERE i.idCompra = NEW.idCompra;

    -- Atualizar o campo total na tabela compra
    UPDATE compra
    SET total = v_total
    WHERE idCompra = NEW.idCompra;
    
    UPDATE produto
    SET quantidade = quantidade - NEW.qtdProduto
    WHERE idProduto = NEW.idProduto;
    
END$$


DELIMITER ;

-- Inserir usuários
INSERT INTO usuario (nome, email, ra, senha, saldo, estado, cargo) VALUES
('João Silva', 'joao.silva@example.com', 'RA001', 'senha123', 500, 'ativo', 'usuario'),
('Maria Oliveira', 'maria.oliveira@example.com', 'RA002', 'senha456', 1200, 'ativo', 'adm'),
('Carlos Souza', 'carlos.souza@example.com', 'RA003', 'senha789', 300, 'inativo', 'usuario');

-- Inserir campanhas
INSERT INTO campanha (nome, estado) VALUES
('Campanha de Verão', 1),
('Campanha de Natal', 1),
('Campanha de Aniversário', 0);

-- Inserir produtos
INSERT INTO produto (nome, imagem1, imagem2, imagem3, valor, quantidade, tipo, idCampanha, estado) VALUES
('Camiseta Masculina', 'camiseta1.jpg', 'camiseta2.jpg', 'camiseta3.jpg', 100, 50, 'fisico', 1, 'ativo'),
('Curso de Python', 'curso_python1.jpg', 'curso_python2.jpg', NULL, 200, 30, 'virtual', 2, 'ativo'),
('Assinatura Premium', 'premium1.jpg', NULL, NULL, 300, 100, 'virtual', NULL, 'ativo');

-- Inserir desafios
INSERT INTO desafio (nome, valor, campanha, dataInicio, dataFim, estado) VALUES
('Desafio da Semana - Corrida', 50, 1, '2025-02-01', '2025-02-10', 'ativo'),
('Desafio de Leitura', 30, 2, '2025-02-05', '2025-02-20', 'ativo'),
('Desafio do Mês - Programação', 100, 0, '2025-02-10', '2025-02-28', 'ativo');

-- Inserir compras
INSERT INTO compra (idUsuario, total, entrega, cep, cidade, estado, pedido) VALUES
(1, 0, 'retirar', '12345-678', 'São Paulo', 'SP', 'pendente'),
(2, 0, 'entrega', '98765-432', 'Rio de Janeiro', 'RJ', 'pendente');

-- Inserir itens de compra
INSERT INTO itensCompra (idProduto, qtdProduto, idCompra) VALUES
(1, 2, 1),
(2, 1, 1),
(3, 3, 2);


SELECT * FROM usuario;
SELECT * FROM produto;
SELECT * FROM campanha;
SELECT * FROM desafio;
SELECT * FROM compra;
SELECT * FROM itensCompra;
