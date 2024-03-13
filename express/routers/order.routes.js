const express = require('express');
const orderRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    newOrder
} = require('../controller/order.controller');

orderRoutes.post('/add-order', verifyToken, newOrder);

module.exports = orderRoutes;