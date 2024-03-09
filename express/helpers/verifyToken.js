const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res) => {
    const authorization = req.headers['authorization'];
    if(authorization === undefined){
        return res.json({ message : 'Invalid authorization'});
    }
    let token = authorization.split(" ")[1];
    console.log(token);
}