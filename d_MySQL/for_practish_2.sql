use dhaval;

create table employes(
	emloyeeid int,
    fullName varchar(20),
    email varchar(30),
    department varchar(20),
    salary int
);

insert into employes (emloyeeid, fullName, email, department, salary) values
(1, 'Girish Gondaliya','gg@test.in','Head',175000),
(2, 'Dhaval Solanki','dhaval24@gmail.com','Head-Manager',150000),
(3,'Vijay Solanki','vs@test.in','Manager',75000),
(4,'Darshan Chauhan','dc5665@gmail.com','Branch-Manager',50000),
(5,'Bhautik Dudhat','bd@test.in','Head Claerk',40000);

update employes set salary = 100000 where emloyeeid = 3;
update employes set salary = 1000 where emloyeeid = 4;
delete from employes where emloyeeid = 5;
select * from employes order by salary desc;
select * from employes where salary >= 5000;



-- Create the product collection
CREATE TABLE product (
    productID varchar(10),
    title VARCHAR(255),
    description varchar(255),
    price DECIMAL(10, 2),
    quantity INT,
    category VARCHAR(255)
);

-- Insert sample data into the product collection
INSERT INTO product (productID, title, description, price, quantity, category)
VALUES
    ("P00001", 'tshirt', 'l - size', 9.99, 10, 'Category 1'),
    ("P00002", 'Jeans-Pent', 'Xl-size', 19.99, 5, 'Category 2'),
    ("P00003", 'Shirt', 'S - size', 14.99, 8, 'Category 1'),
    ("P00004", 'Dress', 'xxl - size', 24.99, 3, 'Category 3'),
    ("P00005", 'trousers', 'm- size', 29.99, 12, 'Category 2');


update product set quantity = 2 where title = 'dress';
delete from product where quantity = 12;
select category,price from product;
select * from product order by price desc;
select * from product where productID in ('P00002','P00003','P00004');
select * from product where price between 10 and 20;


