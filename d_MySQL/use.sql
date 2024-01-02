-- \sql

-- \connect root@localhost:3306

-- create database test;

-- show test;

-- use test;

-- show tables;

create table test(
    id int,
    firstName varchar(20),
    lastName varchar(30),
    gender varchar(20),
    email varchar(20),
    mobileNo int
);

insert into test (id, firstName, lastName, gender, email, mobileNo) values(1,'Dhaval','Solanki','Male','dhavalas24@gmail.com',1234567890);

insert into test (id, firstName, lastName, gender, email, mobileNo) values
(2,'Vijay','Solanki','Male','vijay@test.in',1234567789),
(3,'Darshan','Chauhan','Male','darshu@test.in',1234567789),
(4,'Jenil','Kakdiya','Male','jenu@test.in',1234567789),
(5,'Krish','Ranghani','Male','krish@test.in',1234567789);

insert into test values (6,'Mahendra','Purohit','Male','bahubali@test.in',1234567890);

-- skip some column data

insert into test (id, firstName, lastName, gender, mobileNo) values
(7,'Monika','Kathiriya','Female',1234567890),
(8,'Srushti','Sojitra','Female',1234567890);

insert into test (id, firstName, lastName, gender, mobileNo) values
(9,'Vrishabh','Jogani','Male',1236547890);

insert into test (id, firstName, lastName, gender, email, mobileNo) values
(10,'Vijay','Vekriya','Male','vv@gmail.com',1234567890),
(11,'Bhautik','Dudhat','Male','bd@gmail.com',1234567890);
