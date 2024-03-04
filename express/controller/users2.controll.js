const User = require('../model/user.model');

exports.addUser = async (req,res) => {
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
        console.log(err);
        res.status(500).json({message : 'Internal Server Error...'});
    }
}