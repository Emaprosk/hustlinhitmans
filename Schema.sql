-- Active: 1678548860172@@127.0.0.1@3308@hh_db
create database hh_db;
SET time_zone = '-03:00';

SELECT * FROM users;
SELECT * FROM articulos;
SELECT * FROM comentarios;
SELECT * FROM categories;
SELECT * FROM permisos;


create table users(
    id int primary key auto_increment,
    username varchar(50) UNIQUE,
    email varchar(255) UNIQUE,
    charactername VARCHAR(30) UNIQUE,
    password varchar(255),     
    estado SMALLINT not null default 1,  -- 1 Activos, 0- Eliminados, 2- Baneados o suspendidos
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create TABLE permisos(
    id int PRIMARY KEY AUTO_INCREMENT,
    id_usuario int,
    admintrador SMALLINT DEFAULT 0,
    moderador SMALLINT DEFAULT 0,
    publicar SMALLINT DEFAULT 0,
    comentar SMALLINT DEFAULT 0,
    editar SMALLINT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table articulos(
    id int primary key auto_increment,
    tittle varchar(150),
    contenido TEXT,
    category VARCHAR(50),
    id_usuario INT,
    createdBy varchar(50),
    updatedBy varchar(50),
    score int default 0,
    status SMALLINT DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table categories(
    id int PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(50),
    img TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table comentarios(
    id int primary key auto_increment,
    articulo_id int not null,
    usuario_id int not null,
    contenido TEXT,
    createdBy varchar(50),
    score int default 0,
    status SMALLINT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





DROP TABLE users;
DROP TABLE permisos;
DROP TABLE articulos;
DROP TABLE comentarios;
DROP TABLE categories;