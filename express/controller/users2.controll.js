const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// exports.addUsers = async (req, res) => {
//     try{
//         const {firstName, lastName, gender, email, password, age} = req.body;
//         // console.log(req.body);
//         let hashPassword = await bcrypt.hash(password,10);
//         console.log(hashPassword);
//         let newUser = await User.create({
//             firstName,
//             lastName,
//             gender,
//             email,
//             password: hashPassword,
//             age
//         });
//         newUser.save();
//         res.status(201).json({user : newUser, message : 'New User Is Added...'});
//     }catch(err){
//         console.log(error);
//         res.status(500).json({message : 'Internal Server Error...'});
//     }
// };

exports.registerUser = async (req, res) => {
    try {
        const { firstName, lastName, gender, email, password, age,newPassword } = req.body;
        let user = await User.findOne({ email: email, isDelete: false});
        if(user) {
            return res.status(400).json({ message: `User Is Already Registered...`});
        }
        // hash Password
        let hashPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            firstName, lastName, 
            gender, email, 
            password : hashPassword, 
            age
        });
        user.save();
        res.status(201).json({ user: user, message: `New User Is Added..`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ` Internal Server Error..`});
    }
};

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false});
        if(!user){
            return res.status(404).json({ message: `User Is Not Found..`});
        }
        let checkPassword = await bcrypt.compare(req.body.password, user.password);
        if(!checkPassword){
            return res.status(400).json({ message: `Password Is Not Match Please Enter Corect Password..`})
        }
        let token = jwt.sign({ userId: user._id }, 'DS07');
        res.status(200).json({ token, message: `Login SuccesFully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`})
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
        let userId = req.user._id;
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
        let userId = req.user._id;
        // let userId = req.query.userId;
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
        let userId = req.user._id;
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

exports.changePassword = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;
        let userId = req.user._id;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: `User Not Found...` });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }
        const hashPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashPassword;
        await user.save(); 
        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
}
