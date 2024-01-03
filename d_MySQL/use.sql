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



-- 03-01-2024

-- select name,city from client_master;
-- select *, city from client_master;
-- select name as "Full Name" from client_master;
-- select name as 'Full Name', City "District" from client_master;


-- where clause
-- select * from client_master where city = 'mumbai';
-- select * from client_master where Baldue < 5000;
-- select * from client_master where Baldue >= 5000;
-- select * from client_master where Baldue = 5000;


-- order by
-- select * from client_master order by City desc, Baldue asc;
-- select * from client_master order by City desc;


-- update query
-- update client_master set Baldue = 1000;  // all recode update
-- update client_master set Baldue = 1000 , City = 'Navi Mumbai' where Baldue = 0;


-- delete query
-- delete from client_master;
-- delete from client_master where Address1 = '66';


-- drop statement
-- drop table client_master;
-- drop database test;
