const Cart = require('../model/cart.model');
const { loginUser } = require('./users2.controll');

exports.addToCart = async (req, res) =>{
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            cartItem: req.body.cartItem,
            isDelete: false
        });
        if (cart) {
            return res.json({ message: `Cart Already Exist.... ${console.error()}`})
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        cart.save();
        res.json({ cart, message: `Cart Added Successfully`});
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Internal Server Error... ${console.error()}`})
    }
};

exports.getAllCart = async (req, res) => {
    try {
        let carts = await Cart.find({ user: req.user._id, isDelete: false}).populate('user').populate('cartItem');
        res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error.... ${console.error()}`});
    }
};

exports.getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId, isDelete: false}).populate('user').populate('cartItem');
        if(!cart){
            return res.status(404).json({ message: `Cart Not Found`});
        }
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error.... ${console.error()}`});
    }
};

exports.updateCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId});
        if (!cart) {
            return res.status(404).json({ message: `Cart Not Found...${console.error()}` });
        }
        cart = await  Cart.findByIdAndUpdate(cart._id, {$set :{ ...req.body}}, { new: true}).populate('user').populate('cartItem');
        res.status(200).json({cart, message: `Cart Item Upadated Successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error.... ${console.error()}`});
    }
};

exports.deleteCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId });
        if (!cart) {
            return res.status(404).json({ message: `Cart Not Found...${console.error()}` });        
        }
        cart = await Cart.findOneAndUpdate(cart._id, { isDelete: true}, { new : true});
        res.status(200).json({cart, message: `Cart Iteam Deleted Successfuly`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : `Internal Server Error.... ${console.error()}`});
    }
};