create table client_master(
    ClientNo varchar(6),
    CName varchar(20),
    CAddress1 varchar(30),
    CAddress2 varchar(30),
    City varchar(15),
    Pincode int,
    CState varchar(15),
    Baldue int
);

insert into client_master(ClientNo,CName,CAddress1,CAddress2,City,Pincode,CState,Baldue) values
('C00001','Ivan Bayross','A/14','Worli','Mumbai',400054,'Maharashtra',15000),
('C00002','Mamta Muzumdar','B2','Chennai','Madras',780001,'Tamil Nadu',0),
('C00003','Chhaya Bankar','D-65','Nariman','Mumbai',400057,'Maharastra',5000),
('C00004','Ashwini Joshi','A-18','Ms','Bangalore',560001,'Karnataka',0),
('C00005','Hansel Colaco','P-7','Bandra','Mumbai',400060,'Maharastra',2000),
('C00006','Deepak Sharma','L9','Long Street','Mangalore',560050,'Karnataka',0);