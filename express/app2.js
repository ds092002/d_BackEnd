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
// app.post('/products', (req, res) => {
//     // console.log(req.body);
//     const product = req.body;
//     if (product) {
//         products.push(product);
//         res.status(201).json({ message: 'Product Added Successfully....' });
//     } else {
//         res.status(404).json({ message: 'Product Not Added ...' });
//     }
// });

app.get('/products',(req,res)=>{
    res.status(200).json(products)
});

// app.get('/products,:id',(req,res)=>{
//     const id = +req.params.id;
app.get('/products/single-product',(req,res)=>{
    const id = +req.query.id;
    // console.log(id);
    // res.status(201).json(products.find(product => product.id === id));
    let product = products.find((item)=> item.id === id);
    res.status(200).json(product);
});

app.listen(port,()=>{
    console.log(`Server Start at http://localhost:${port}`);
});