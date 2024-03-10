const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    const authorization = req.headers['authorization'];
    if(authorization === undefined){
        return res.json({ message : `Invalid authorization : ${console.error()}`});
    }
    let token = authorization.split(" ")[1];
    console.log(token);
    if(token === undefined){
        return res.status(401).json({ message : `Unauthoeize : ${console.error()}`});
    }else{
        let {userId} = jwt.verify(token, 'DS07');
        console.log(userId);
        let user = await User.findById(userId);
        console.log(user);
        if (user) {
            req.user = user;
            next();
        } else {
            return res.status(401).json({ message: `Invalid User(Token) : ${console.error()}`})
        }
    }
};