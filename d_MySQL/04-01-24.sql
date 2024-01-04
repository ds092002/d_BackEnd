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


