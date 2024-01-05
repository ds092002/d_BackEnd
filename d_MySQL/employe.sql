
select * from employees;

select * from employees where jobTitle = 'Sales Rep' and employeeNumber Between 1200 and 1500;

select * from employees where officeCode >= 2 and jobTitle not in  ('Sales Rep');

select firstName , lastName as  'Name Of The Employee' from employees order by lastname;

select * from employees where officeCode in (1,3,5);

select * from employees where officeCode not in (1,3);