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
}