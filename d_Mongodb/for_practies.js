
// 1 create database named "ecommerce"
// use dhaval;
db.createDatabase("ecommerce")


// 2 create the following tables


db.createCollection("customers")

db.customers.insertOne({
    customer_id: "123456",
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
    password: "password123"
})

db.createCollection("products")
db.products.insertOne({
    product_id: "P001",
    product_name: "Example Product",
    product_description: "This is an example product",
    product_price: 9.99,
    product_quantity: 100,
    category: "Electronics"
  });

  
  db.createCollection("orders");
  db.orders.insertOne({
    order_id: "12345",
    customer_id: "ABC123",
    order_date: new Date(),
    total_price: 100.50
  });

  
  

db.createCollection("orders_items")
db.orders.insertOne({
      order_item_id: "item1",
      order_id: "order1",
      product_id: "product1",
      quantity: 10,
      price: 9.99
});


// 3 insert some sample data 


db.customers.insertMany([
    {
      customer_id: "1",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      password: "password1"
    },
    {
      customer_id: "2",
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      password: "password2"
    },
    {
      customer_id: "3",
      first_name: "Michael",
      last_name: "Johnson",
      email: "michael.johnson@example.com",
      password: "password3"
    },
    {
      customer_id: "4",
      first_name: "Emily",
      last_name: "Brown",
      email: "emily.brown@example.com",
      password: "password4"
    },
    {
      customer_id: "5",
      first_name: "David",
      last_name: "Wilson",
      email: "david.wilson@example.com",
      password: "password5"
    }
  ]);
  
  db.products.insertMany([
    {
      product_id: "1",
      product_name: "Product 1",
      product_description: "Description 1",
      product_price: 10.99,
      product_quantity: 100,
      category: "Category 1"
    },
    {
      product_id: "2",
      product_name: "Product 2",
      product_description: "Description 2",
      product_price: 19.99,
      product_quantity: 50,
      category: "Category 2"
    },
    {
      product_id: "3",
      product_name: "Product 3",
      product_description: "Description 3",
      product_price: 5.99,
      product_quantity: 200,
      category: "Category 1"
    },
    {
      product_id: "4",
      product_name: "Product 4",
      product_description: "Description 4",
      product_price: 14.99,
      product_quantity: 75,
      category: "Category 2"
    },
    {
      product_id: "5",
      product_name: "Product 5",
      product_description: "Description 5",
      product_price: 9.99,
      product_quantity: 150,
      category: "Category 1"
    }
  ]);
  
  // Insert the data into the "products" collection
  db.products.insertMany(data);
  
  db.orders.insertMany([
    {
      order_id: "1",
      customer_id: "1",
      order_date: new Date("2022-01-01"),
      total_price: 100.50
    },
    {
      order_id: "2",
      customer_id: "2",
      order_date: new Date("2022-01-02"),
      total_price: 75.20
    },
    {
      order_id: "3",
      customer_id: "3",
      order_date: new Date("2022-01-03"),
      total_price: 150.80
    },
    {
      order_id: "4",
      customer_id: "4",
      order_date: new Date("2022-01-04"),
      total_price: 200.00
    },
    {
      order_id: "5",
      customer_id: "5",
      order_date: new Date("2022-01-05"),
      total_price: 50.75
    }
  ]);
  
  db.Orders.insertMany(ordersData);
  
  db.order_items.insertMany([
    {
      order_item_id: "1",
      order_id: "1",
      product_id: "1",
      quantity: 2,
      price: 10.99
    },
    {
      order_item_id: "2",
      order_id: "2",
      product_id: "2",
      quantity: 1,
      price: 5.99
    },
    {
      order_item_id: "3",
      order_id: "3",
      product_id: "3",
      quantity: 2,
      price: 15.99
    },
    {
      order_item_id: "4",
      order_id: "4",
      product_id: "4",
      quantity: 3,
      price: 25.50
    },
    {
      order_item_id: "5",
      order_id: "5",
      product_id: "5",
      quantity: 4,
      price: 30.00
    }
  ]);

  


  
// db.student.aggregate([
//     {
//         $lookup: {
//               from: "teacher",
//               localField: "teacher",
//               foreignField: "name",
//               as: "Faculty"
//              }
//     }
//     ]);

db.orders.aggregate([
  {
    $lookup:{
 
    }
  }
])
db.orders.aggregate([
  {
     $lookup: {
       from: "customers",
       localField: "customer_id",
       foreignField: "customerid",
       as: "customer"
     }
   },
   {
     $unwind: "$customer"
   },
   {
     $lookup: {
       from: "order_items",
       localField: "order_id",
       foreignField: "order_id",
       as: "order_items"
     }
   },
   {
     $unwind: "$order_items"
   },
   {
     $lookup: {
       from: "products",
       localField: "order_items.product_id",
       foreignField: "product_id",
       as: "product"
     }
   },
   {
     $unwind: "$product"
   },
   {
     $project: {
       _id: 0,
       order_id: 1,
       customer_id: 1,
       customer_name: {$concat: ["$customer.first_name", " ", "$customer.last_name"]},
       order_date: 1,
       total_price: 1,
       product_name: "$product.product_name",
       quantity: "$order_items.quantity",
       price: "$order_items.price"
     }
   }
 ])



db.products.updateOne({product_id: "2"},{$set: {product_quantity: 150}},{upsert: true});

db.products.updateMany({product_id: "2"},{$set: {product_quantity: 150}},{upsert: true});