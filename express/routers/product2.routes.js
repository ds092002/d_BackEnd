const express = require('express');
const productRoutes = express.Router();
const { addProducts,
        getAllProducts,
        getProduct,
        updateProduct,
        deleteProduct
} = require('../controller/product2.controll');

productRoutes.post('/add-product',addProducts);

productRoutes.get('/getAll-products',getAllProducts);

productRoutes.get('/get-product',getProduct);

productRoutes.put('/update-product',updateProduct);

productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;