const users = require('../user.json');

exports.addUsers = (req,res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({message : 'Users Details Added SuccessFully.......'});
};

exports.getAllUsers = (req,res) => {
    res.status(200).json(users);
};

exports.getUsers = (req,res) => {
    const id = +req.query.id;
    let user = users.find((info) => info.id === id);
    res.status(200).json(user);
};

exports.replaceUsers = (req,res) => {
    const id = +req.query.id;
    let usersIndex = users.findIndex((info) => info.id === id);
    let user = users[usersIndex];
    users.splice(usersIndex, 1, { ...req.body});
    res.status(200).json({message : 'Users Data Replace SuccessFully........'});
};

exports.updateUsers = (req,res) => {
    const id = +req.query.id;
    let usersIndex = users.findIndex((info) => info.id === id);
    let user = users[usersIndex];
    users.splice(usersIndex, 1, { ...user, ...req.body});
    res.status(200).json({message : 'Users Data Replace SuccessFully........'});
};

exports.deleteUsers = (req,res) => {
    const id = +req.query.id;
    let usersIndex = users.findIndex((info) => info.id === id);
    let user = users[usersIndex];
    users.splice(usersIndex, 1);
    res.status(200).json({message : 'Users Data Delete Successfully.........'});
};