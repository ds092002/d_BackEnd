const products = require('../public/product.json');

// Cerate & Add Data
exports.addProduct = (req,res)=>{
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    console.log(product);
    // product.push({...req.body});
    res.status(201).json({message : 'Product Added Successfully....'})
};

// Get All Product
exports.getAllProduct = (req,res)=>{
    res.status(200).json(products)
};

// Get Specific Product
// exports.getProduct = (req,res)=>{
//     const id = +req.params.id;
exports.getProduct = (req,res)=>{
    const id = +req.query.id;
    // console.log(id);
    // res.status(201).json(products.find(product => product.id === id));
    let product = products.find((item)=> item.id === id);
    res.status(200).json(product);
};

//Replace Single Product
exports.replaceProduct = (req,res)=>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    products.splice(productIndex, 1, { ...req.body});
    console.log(product);
    res.status(200).json({message : "Product Replace Successfully......"});
};

//Update Single Product
exports.updateProduct = (req,res)=>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.status(200).json({messgae : "Product Update Successfully......"});
};

//Delete Single Product
exports.deleteProduct = (req,res)=>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    products.splice(productIndex,1);
    res.status(200 ).json({messgae : "Product Delete Successfully......"});
};


// module.exports = {}