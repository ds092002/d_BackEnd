create table salesmanmaster(
    SalesmanNO varchar(6),
    SalesmanName varchar(20),
    Address1 varchar(30),
    Address2 varchar(30),
    City varchar(8),
    Pincode int,
    State varchar(20),
    SaleAmt int,
    TgtToGet int,
    YtdSales int,
    Remarks varchar(60)
);

insert into salesmanmaster(SalesmanNO, SalesmanName, Address1, Address2, City, Pincode, State, SaleAmt, TgtToGet, YtdSales, Remarks) values
('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharashtra',3000,100,50,'Good'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
('S00003','Raj','P-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3000,200,150,'Good');


-- select * from salesmanmaster where SaleAmt = 3000;   // find salary equal to 3000

-- update salesmanmaster set City= 'Pune' where City = 'Mumbai';