const User = require('../model/user.model');

exports.addUsers = async (req, res) => {
    try{
        const {firstName, lastName, gender, email, password, age} = req.body;
        console.log(req.body);
        let newUser = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password,
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
        let users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error...` });
    }
};

exports.getUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);
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
        user = await User.findOneAndDelete({_id:user._id});
        res.status(200).json({ user, message : `User Deleted...` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error: ${error.message}` });
    }
};
