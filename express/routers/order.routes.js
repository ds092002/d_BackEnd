const express = require('express');
const orderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    newOrder,
    getAllOrders,
    getOrder,
    deleteOrder
} = require('../controller/order.controller');

orderRoutes.post('/add-order', verifyToken, newOrder);

orderRoutes.get('/getAll-order', verifyToken, getAllOrders);

orderRoutes.get('/get-order', verifyToken, getOrder);

orderRoutes.delete('/delete-order', verifyToken, deleteOrder);

module.exports = orderRoutes;
