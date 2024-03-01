const express = require('express');
const productRoutes = express.Router();
const { addProduct,
     getAllProduct,
     getProduct,
     replaceProduct,
     updateProduct,
     deleteProduct
} = require('../controller/product.controll');

// Create Products
productRoutes.post('/',addProduct);

// Get All Products
productRoutes.get('/',getAllProduct);

// Get Single Product
productRoutes.get('/single-product',getProduct);

// Replace Single Product
productRoutes.put('/replace-product',replaceProduct);

// Update Single Product
productRoutes.patch('/update-product',updateProduct);

// Delete Single Product
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;