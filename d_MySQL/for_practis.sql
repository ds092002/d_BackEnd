 create table customer(
        customer_id int primary key,
        fist_name varchar(255),
        last_name varchar(255),
        email varchar(255),
        password varchar(255)
 );
INSERT INTO customers (customer_id, fist_name, last_name, email, password) VALUES 
(1, 'John', 'Doe', 'john.doe@example.com', 'password123'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'password456'),
(3, 'Michael', 'Johnson', 'michael.johnson@example.com', 'password789');
select * from customer;


 create table products(
        product_id int primary key,
        product_name varchar(255),
        product_description varchar(255),
        product_price int,
        category varchar(255)
 );
 INSERT INTO products (product_id, product_name, product_description, product_price, category) VALUES 
 (1, 'Product A', 'Description of Product A', 10, 'Category 1'),
 (2, 'Product B', 'Description of Product B', 20, 'Category 2'),
 (3, 'Product C', 'Description of Product C', 30, 'Category 1');


 create table orders(
        order_id int primary key,
        customer_id int,
        foreign key (customer_id) REFERENCES customers (customer_id),
        order_date date,
        total_price decimal
 );
 INSERT INTO orders (order_id, customer_id, order_date, total_price) VALUES
 (1, 1, '2021-01-01', 50.00),
 (2, 2, '2021-02-01', 40.00),
 (3, 3, '2021-03-01', 60.00);


 create table order_items(
        order_item_id int primary key,
        order_id int,
        foreign key (order_id) REFERENCES orders (order_id), 
        product_id int,
        foreign key (product_id) REFERENCES products (product_id),
        quantity int,
        price decimal
 );
 INSERT INTO order_items (order_item_id, order_id, product_id, quantity, price) VALUES 
 (1, 1, 1, 2, 20.00),
 (2, 1, 2, 1, 20.00),
 (3, 2, 3, 3, 60.00);

--  use the select statments to retrive all products in a specific category and sort them by price in ascending order
 =>   SELECT *
      FROM products
      WHERE category = 'Category 1'
      ORDER BY product_price ASC;

-- use the select statments to retrive all orders placed by a specific customer, using the customer's email
=>    SELECT o.order_id, o.order_date, o.total_price
      FROM customers c
      JOIN orders o ON c.customer_id = o.customer_id
      WHERE c.email = 'customer_email';

      SELECT o.order_id, o.order_date, o.total_price
      FROM customers c
      JOIN orders o ON c.customer_id = o.customer_id
      WHERE c.email = 'michael.johnson@example.com';



--  use the delete statments to delete an order with a specific order_id
 =>   DELETE FROM `orders`
      WHERE order_id = 2;


--  use the update statments to update the product_quantity of a product with specific product_id
--  =>   UPDATE products
--       SET product_quantity = {new_quantity}
--       WHERE product_id = {specific_product_id};

      UPDATE products
      SET quantity = 5
      WHERE product_id = 1;



-- use the join statments to retrive order detail including customer information and product detail
=>    SELECT o.order_id, c.fist_name, c.last_name, c.email, p.product_name, oi.quantity, oi.price
      FROM orders o
      JOIN customers c ON o.customer_id = c.customer_id
      JOIN order_items oi ON o.order_id = oi.order_id
      JOIN products p ON oi.product_id = p.product_id;


-- insert some sample data into each table using the insert into statments