const express = require('express');
const cartRoutes = express.Router();
const {verifyToken} = require('../helpers/verifyToken');
const{
    addToCart,
    getAllCart
} = require('../controller/cart.controller');

cartRoutes.post('/add-cart',verifyToken, addToCart);

cartRoutes.get('/get-carts',verifyToken, getAllCart);

module.exports = cartRoutes;