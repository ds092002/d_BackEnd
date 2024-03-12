const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : {
        type : String
    },
    gender : {
        type : String,
        enum : ['Male','Female']
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    newPassword: {
        type : String
    }
});

module.exports = mongoose.model('users',userSchema);