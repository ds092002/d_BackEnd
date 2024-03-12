const express = require('express');
const productRoutes = express.Router();
const { verifyToken} = require('../helpers/verifyToken');
const { addProducts,
        getAllProducts,
        getProduct,
        updateProduct,
        deleteProduct
} = require('../controller/product2.controll');

productRoutes.post('/add-product', addProducts);

productRoutes.get('/getAll-products',verifyToken, getAllProducts);

productRoutes.get('/get-product',verifyToken, getProduct);

productRoutes.put('/update-product',verifyToken, updateProduct);

productRoutes.delete('/delete-product',verifyToken, deleteProduct);

module.exports = productRoutes;  