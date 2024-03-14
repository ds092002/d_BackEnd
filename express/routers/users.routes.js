const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');

const { 
        // addUsers,
        registerUser,
        loginUser, 
        getAllUsers, 
        getUser, 
        updateUser, 
        deleteUser,
        changePassword
} = require('../controller/users.controll');

// userRoutes.post('/add-user', addUsers);

userRoutes.post('/register-user', registerUser);

userRoutes.post('/login-user', loginUser);

userRoutes.get('/getAll-users',verifyToken, getAllUsers);

userRoutes.get('/get-users',verifyToken, getUser);

userRoutes.put('/update-user',verifyToken, updateUser);

userRoutes.delete('/delete-user',verifyToken, deleteUser);

userRoutes.put('/change-password',verifyToken, changePassword);

module.exports = userRoutes;