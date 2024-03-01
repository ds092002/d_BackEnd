const express = require('express');
const usersRoutes = express.Router();
const {addUsers, 
    getAllUsers,
    getUsers, 
    replaceUsers, 
    updateUsers, 
    deleteUsers
} = require('../controller/user.controll');

// Create Users
usersRoutes.post('/',addUsers);

// Get All Users
usersRoutes.get('/',getAllUsers);

// Get Specific User
usersRoutes.get('/single-user',getUsers);

// Replace Specific User
usersRoutes.put('/replace-user',replaceUsers);

// Update Specific User
usersRoutes.patch('/update-user',updateUsers);

// Delete Specific User
usersRoutes.delete('/delete-user',deleteUsers);

module.exports = usersRoutes;