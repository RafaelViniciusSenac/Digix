create database bancoDigix;

use bancoDigix;

create table usuario(
	idUsuario int not null auto_increment primary key,
	nome varchar(100) not null,
    email varchar(100) not null,
    ra varchar(20) not null,
    senha varchar(20) not null,
    saldo int default 0,
    estado enum('ativo','inativo') default "ativo",
    cargo enum('adm','usuario') not null
    
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
    idCampanha int default 0,
	foreign key (idCampanha) references campanha(idCampanha),
    
);

CREATE TABLE campanha(
	idCampanha int not null auto_increment primary key,
	nome varchar(20),
    estado int
);


CREATE TABLE desafio(
	idDesafio int not null auto_increment primary key,
    nome varchar(100) not null,
    valor int not null,
    campanha int default 0,
    dataInicio date,
    dataFim date
);

