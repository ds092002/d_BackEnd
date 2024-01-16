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
select * from customers where phone like '6%';

select country from customers group by country;
select distinct creditLimit from customers;
select country , count(customerNumber) from customers group by country order by country;

select max(creditLimit) from customers;
select min(creditLimit) from customers;
select sum(creditLimit) from customers;
select avg(creditLimit) from customers;

select country, max(creditLimit) from customers group by country;
select country, min(creditLimit) from customers group by country;
select country, min(creditLimit) from customers group by country order by country;
select country, sum(creditLimit) from customers group by country;
select country, avg(creditLimit) from customers group by country;




select * from customers where country not in ('USA');       -- (4) 
select * from customers where customerNumber not between 150 and 200;   -- (5)
select * from customers where creditLimit > 70000 order by contactLastName desc;     --  (7)
select * from customers where city in ('Singapore','Liverpool','NYC');     --  (8) 
select * from customers where contactLastName like 'Smith%';     -- (9) 
select * from customers where creditLimit between 50000 and 95000;    --  (11) 
select * from customers where contactLastName like 'S%';   --  (13) 
select * from customers where contactLastName like 'S%h';    --  (14) 
select * from customers where contactLastName like 's____';     --  (15) 
select * from customers where contactLastName like '________';    --  (16)  
select * from customers where customerName like 'a%e';      --  (17) 
select * from customers where customerName like '%ee%';    --   (18) 
select state, max(creditLimit) from customers group by state;  --  (20) 
select state from customers group by state;

select * from employees where jobTitle = 'sales Rep' and employeeNumber between 1200 and 1500;
select * from customers where country not in ('USA');
select * from customers where customerNumber not between 150 and 200;
select firstname , lastname as 'Name Of The Employee' from employees order by lastName desc;
select * from customers where creditLimit >= 7000 order by contactLastName desc;
select * from customers where city in ('singapore','liverpool','nyc');
select * from customers where contactLastName like 'Smith%';
select state , max(creditlimit) from customers group by state;