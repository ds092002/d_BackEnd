db.createCollection("customers");
db.customers.insertOne({
    customer_id: "C01",
    first_name: "Dhaval",
    last_name: "Solanki",
    email: "dhaval@gmail.com",
    password: 123456
});
db.customers.insertMany([
    {
        customer_id: "C02",
        first_name: "Vijay",
        last_name: "Solanki",
        email: "vijay@gmail.com",
        password: 123456
    },
    {
        customer_id: "C03",
        first_name: "Darshan",
        last_name: "Chuahan",
        email: "darshan@gmail.com",
        password: 123456
    },
    {
        customer_id: "C04",
        first_name: "Jenil",
        last_name: "Kakadiya",
        email: "jenil@gmail.com",
        password: 123456
    }
]);

db.createCollection("products")
db.products.insertOne({
    product_id: "P001",
    product_name: "Jeans",
    product_description: "Puma",
    product_price: 299,
    product_quantity: 3,
    category: "Category 1"
});

db.products.insertMany([
    {
        product_id: "P002",
        product_name: "Galaxy S23 FE",
        product_description: "Samsung",
        product_price: 4850,
        product_quantity: 3,
        category: "Category 1"
    },
    {
        product_id: "P003",
        product_name: "Shoes",
        product_description: "Nike",
        product_price: 100,
        product_quantity: 4,
        category: "Category 2"
    },
    {
        product_id: "P004",
        product_name: "Q-LED",
        product_description: "Samsung",
        product_price: 600,
        product_quantity: 6,
        category: "Category 3"
    },
    {
        product_id: "P005",
        product_name: "Bullet-Bike",
        product_description: "Royal Enfield",
        product_price: 3000,
        category: "Category 1"
    }
]);

db.createCollection("orders")

db.orders.insertOne({
    order_id: "O001",
    customer_id: "C01",
    order_date: "12-01-2024",
    total_price: 1000
});

db.orders.insertMany([
    {
        order_id: "O002",
        customer_id: "C02",
        order_date: "13-01-2024",
        total_price: 2000
    },
    {
        order_id: "O003",
        customer_id: "C03",
        order_date: "14-01-2024",
        total_price: 3000
    },
    {
        order_id: "O999",
        customer_id: "C04",
        order_date: "15-01-2024",
        total_price: 700
    },
    {
        order_id: "O999",
        customer_id: "C04",
        order_date: "15-01-2024",
        total_price: 700
    }
]);

db.createCollection("orders_items")
db.orders_items.insertOne({
    order_item_id: "i001",
    order_id: "O001",
    product_id: "P001",
    quntity: 2,
    price: 299
});

db.orders_items.insertMany([
    {
        order_item_id: "i002",
        order_id: "O002",
        product_id: "P002",
        quntity: 2,
        price: 4850
    },
    {
        order_item_id: "i003",
        order_id: "O003",
        product_id: "P003",
        quntity: 2,
        price: 100
    },
    {
        order_item_id: "i004",
        order_id: "O999",
        product_id: "P004",
        quntity: 2,
        price: 600
    },
    {
        order_item_id: "i005",
        order_id: "O999",
        product_id: "P005",
        quntity: 2,
        price: 3000
    }
]);


db.customers.find({});
db.products.find({});
db.orders.find({});
db.orders_items.find({});

db.orders.aggregate([
    {
        $lookup:{
            from: "customers",
            localField: "customer_id",
            foreignField: "customer_id",
            as: "customer"
        }
    },
    {
        $lookup:{
            from: "orders_items",
            localField: "order_id",
            foreignField: "order_id",
            as: "order"
        }
    },
    {
        $lookup:{
            from: "products",
            localField: "order.product_id",
            foreignField: "product_id",
            as: "product"
        }
    }
])

db.products.updateOne(
    {product_id: "P002"},
    {$set: {product_quantity: 9}},
    {upsert: true});

db.orders.aggregate([
    {
        $lookup:{
            from: "orders_items",
            localField: "order_id",
            foreignField: "order_id",
            as: "order"
        }
    },
    {
        $lookup:{
            from: "products",
            localField: "order.product_id",
            foreignField: "product_id",
            as: "product"
        }
    },
    {
        $lookup:{
            from: "customers",
            localField: "customer_id",
            foreignField: "customer_id",
            as: "customer"
        }
    },
    {
        $match:{
            "customer.email":"dhaval@gmail.com"
        }
    }
]);

db.products.aggregate([
    {
        $match:{
            category: "Category 1"
        }
    },
    {
        $sort: {
            product_price: 1
        }
    }
]);

db.orders.deleteOne({order_id: "O001"})