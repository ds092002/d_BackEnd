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
        changePassword,
        addNewUser
} = require('../controller/users.controll');
const { upload } = require('../helpers/imageUpload');

// userRoutes.post('/add-user', addUsers);

userRoutes.post('/register-user', registerUser);

userRoutes.post('/login-user', loginUser);

userRoutes.get('/getAll-users',verifyToken, getAllUsers);

userRoutes.get('/get-users',verifyToken, getUser);

userRoutes.put('/update-user',verifyToken, updateUser);

userRoutes.delete('/delete-user',verifyToken, deleteUser);

userRoutes.put('/change-password',verifyToken, changePassword);

userRoutes.post('/add-user', upload.single('profileImage'), addNewUser);

module.exports = userRoutes;