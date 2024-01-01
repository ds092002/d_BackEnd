-- \sql

-- \connect root@localhost:3306

-- create dtatbase d_BackEnd;

-- show database;

-- use d_BackEnd;

-- show tables;

create table user(
    id int,
    firstName varchar(20),
    lastName varchar(30),
    gender varchar(20),
    email varchar(20),
    mobileNo int
);