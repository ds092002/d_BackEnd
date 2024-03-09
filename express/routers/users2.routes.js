const express = require('express');
const userRoutes = express.Router();
const {verifyToken} = require('../helpers/verifyToken');

const { 
        // addUsers,
        registerUser,
        loginUser, 
        getAllUsers, 
        getUser, 
        // updateUser, 
        // deleteUser
} = require('../controller/users2.controll');

// userRoutes.post('/add-user', addUsers);

userRoutes.post('/register-user', registerUser);

userRoutes.post('/login-user', loginUser);

userRoutes.get('/getAll-users',verifyToken, getAllUsers);

userRoutes.get('/get-users', getUser);

// userRoutes.put('/update-user', updateUser);

// userRoutes.delete('/delete-user',deleteUser);

module.exports = userRoutes;