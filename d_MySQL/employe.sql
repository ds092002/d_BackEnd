use classicmodels;
select * from employees;     -- (1) 

select * from employees where jobTitle = 'Sales Rep' and employeeNumber Between 1200 and 1500;      -- (2) 

select * from employees where officeCode >= 2 and jobTitle not in  ('Sales Rep');      -- (3) 

select firstName , lastName as  'Name Of The Employee' from employees order by lastname;     -- (6) 

select * from employees where officeCode in (1,3,5);    -- (10) 

select * from employees where officeCode not in (1,3);     -- (12)

select jobTitle , count(*) from employees group by jobTitle;    --   (19) 