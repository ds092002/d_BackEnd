show databases;
use dhaval;
show tables;

select * from client_master;
select * from product_master;
select * from salesman_master;
select * from sales_order where orderstatus like 'ful%';
select * from sales_orderDetail;


select so.*, cm.* from sales_order so, client_master cm where so.ClientNO = cm.ClientNo;
select so.*, cm.Cname from sales_order so, client_master cm where so.ClientNO = cm.ClientNo;

select so.*, cm.City , cm.CName from sales_order so inner join client_master cm on so.ClientNo = cm.ClientNo;

select so.*, cm.Cname,cm.CAddress1 from sales_order so left join client_master cm on so.ClientNo = cm.Clientno; 

select so.*, cm.Cname, cm.city from sales_order so Right join client_master cm on so.ClientNo = cm.ClientNo order by cm.city;


select sod.*, cm.Cname, pm.Description from sales_orderDetail sod
inner join product_master pm on pm.productno = sod.productno
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo;

select sod.*, cm.*, pm.* from sales_orderDetail sod
inner join product_master pm on pm.productno = sod.productno
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo  where CName like '%Ivan Bayross';

select sod.*, cm.*, pm.* from sales_orderDetail sod
inner join product_master pm on pm.productno = sod.productno
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo  where Description like 'tro%';

