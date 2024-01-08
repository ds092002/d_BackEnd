create table salesman_master(
    SalesmanNO varchar(6) primary key,
    SalesmanName varchar(20) Not Null,
    Address1 varchar(30) Not Null,
    Address2 varchar(30),
    City varchar(8),
    Pincode int,
    State varchar(20),
    SaleAmt int Not Null,
    TgtToGet int Not Null,
    YtdSales int Not Null,
    Remarks varchar(60)
);

insert into salesman_master(SalesmanNO, SalesmanName, Address1, Address2, City, Pincode, State, SaleAmt, TgtToGet, YtdSales, Remarks) values
('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharashtra',3000,100,50,'Good'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
('S00003','Raj','P-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3000,200,150,'Good');


-- select * from salesman_master where SaleAmt = 3000;   // find salary equal to 3000

-- update salesman_master set City= 'Pune' where City = 'Mumbai';