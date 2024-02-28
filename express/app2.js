// CRUD

const express = require('express');
const app = express();
const port = 7007;
const morgan = require('morgan');
const products = require('./public/product.json');

// Middlware
app.use(express.json());
app.use(morgan('dev'));

// END-points - CRUD
app.post('/products',(req,res)=>{
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // product.push({...req.body});
    res.status(201).json({message : 'Product Added Successfully....'})
});
app.get('/products',(req,res)=>{
    res.status(201).json(products)
});

app.listen(port,()=>{
    console.log(`Server Start at http://localhost:${port}`);
});