use classicmodels;

select * from customers;

select * from customers limit 7;

select * from customers where country = 'USA';

select * from customers where country = 'USA' and city = 'NYC';

select * from customers where country = 'USA' and city = 'NYC' and customerNumber > 400;

select * from customers where country = 'USA' or customerNumber > 400;

select * from customers where country in ('USA','Germany','france');