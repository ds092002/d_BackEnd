use classicmodels;

select * from customers;

select * from customers limit 7;

select * from customers where country = 'USA';

select * from customers where country = 'USA' and city = 'NYC';

select * from customers where country = 'USA' and city = 'NYC' and customerNumber > 400;

select * from customers where country = 'USA' or customerNumber > 400;

select * from customers where country in ('USA','Germany','france');

select * from customers where country not in ('USA','Germany','france','UK');

select * from customers where customerNumber >= 200 and customerNumber <= 350;

select * from customers where customerNumber between 200 and 400;

select * from customers where customerNumber not between 200 and 400;

select * from customers where customerName like 'm%';
select * from customers where customerName like 'mini%';
select * from customers where customerName like 'd%';
select * from customers where customerName like 's%'and country = 'USA';
select * from customers where customerName like '%d%' and addressLine1 = 7;
select * from customers where customerName like 'd%s';
select * from customers where customerName like 'd%d';
select * from customers where customerName like 'd%' and contactFirstName like 'm%';
select * from customers where customerName like '%o_';
select * from customers where customerName like '_o%___' and addressLine2 like 'p%';



select * from customers where country not in ('USA');
select * from customers where customerNumber not between 150 and 200;
select * from customers where creditLimit > 70000 order by contactLastName desc;
select * from customers where city in ('Singapore','Liverpool','NYC');
select * from customers where contactLastName like 'Smith%';
select * from customers where contactLastName like 'S%';
select * from customers where creditLimit between 50000 and 95000;
select * from customers where contactLastName like 'S%h';
select * from customers where contactLastName like 's____';
select * from customers where contactLastName like '________';
