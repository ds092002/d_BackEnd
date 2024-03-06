const User = require('../model/user.model');
const bcrypt = require('bcryptjs');

exports.addUsers = async (req, res) => {
    try{
        const {firstName, lastName, gender, email, password, age} = req.body;
        // console.log(req.body);
        let hashPassword = await bcrypt.hash(password,10);
        console.log(hashPassword);
        let newUser = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password: hashPassword,
            age
        });
        newUser.save();
        res.status(201).json({user : newUser, message : 'New User Is Added...'});
    }catch(err){
        console.log(error);
        res.status(500).json({message : 'Internal Server Error...'});
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        let user = await User.find({isDelete: false});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error...` });
    }
};

exports.getUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        // let user = await User.findById(userId);
        let user = await User.findOne({ _id:userId, isDelete: false });
        if(!user){
            return res.status(404).json({ message : `User Not Found...` });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error...` });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);
        if(!user){
            return res.status(404).json({ message : `User Not Found...`});
        }
        user = await User.findOneAndUpdate({_id:user._id}, { $set: { ...req.body}}, { new : true });
        res.status(200).json({user, message : `User updated...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error: ${error.message}` });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user =  await User.findById(userId);
        if(!user){
            return res.status(404).json({ message : `User Not Found...` });
        }
        // user = await User.findOneAndDelete({_id:user._id});
        user = await User.findOneAndUpdate({ _id: user._id}, { isDelete: true}, { new : true });
        res.status(200).json({ user, message : `User Deleted...` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error: ${error.message}` });
    }
};
