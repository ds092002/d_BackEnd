const Product = require('../model/product.model');
// require('../helpers/verifyToken')

exports.addProducts = async(req, res) => {
    try {
        const{title, description, price, category} = req.body;
        console.log(req.file);
        let newProduct = await Product.create({
            title,
            description,
            price,
            category
        });
        console.log(newProduct);
        newProduct.save();
        res.status(201).json({product: newProduct, meassage : `Product Added SuccesFully`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
}; 

exports.getAllProducts = async(req, res) => {
    try {
        let product = await Product.find({isDelete: false});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
};

exports.getProduct = async(req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findOne({_id:productId, isDelete: false});
        if(!product){
            return res.status(404).json({message: `No Product Found with the given ID.`});
        }
        res.status(200).json({product});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
};

exports.updateProduct = async(req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : `No Product Found With the Given Id.`});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {$set : { ...req.body}}, { new : true});
        res.status(200).json({product,message : `Product Updated SuccesFully`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
};

exports.deleteProduct = async(req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : `No Product Found With The Given Id.`});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {isDelete: true},{new : true});
        res.status(200).json({product,message : `This Product will be Deleted.`});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal Server Error`});
    }
}

