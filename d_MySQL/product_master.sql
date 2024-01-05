create table productmaster
(
    ProductNo varchar(6),
    Description varchar(16),
    ProfitPercent int,
    UnitMeasure varchar(10),
    QtyOnHand int,
    RecoredLVL1 int,
    SellPrice int,
    CostPrice int
);

insert into productmaster(ProductNo, Description, ProfitPercent, UnitMeasure, QtyOnHand, RecoredLVL1, SellPrice, CostPrice) values
('P00001','T-Shirt',5,'Piece',200,50,350,250),
('P0345','Shirts',6,'Piece',150,50,500,350),
('P06734','Cotton Jeans',5,'Piece',100,20,600,450),
('P07865','Jeans',5,'Piece',100,20,750,500),
('P07868','Trousers',2,'Piece',150,50,850,550),
('P07885','Pull Overs',2.5,'Piece',80,30,700,450),
('P07965','Denim Shirts',4,'Piece',100,40,350,250),
('P07975','Lycra Tops',5,'Piece',70,30,300,175),
('P08865','Skirts',5,'Piece',75,30,450,300);


-- select Description from productmaster;   // various product from product master


-- update productmaster set CostPrice = 950 where ProductNo = 'P07868';    // change cost price of trousers
