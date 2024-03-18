const ProductServices = require('../services/product.service');
const productService = new ProductServices();

// const Product = require('../model/product.model');
// require('../helpers/verifyToken')

// exports.addProducts = async(req, res) => {
//     try {
//         const{title, description, price, category} = req.body;
//         console.log(req.file);
//         let newProduct = await Product.create({
//             title,
//             description,
//             price,
//             category
//         });
//         console.log(newProduct);
//         newProduct.save();
//         res.status(201).json({product: newProduct, meassage : `Product Added SuccesFully`});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// }; 

exports.addProducts = async(req, res) => {
    let product = await productService.getProduct({title: req.body.title, isDelete: false});
    if (product) {
        return res.json({ message: `Product Is Already Exist`})
    }
    product = await productService.addNewProduct({...req.body});
    res.status(201).json({product, message: `Product Is Added...`})
};

// exports.getAllProducts = async(req, res) => {
//     try {
//         let product = await Product.find({isDelete: false});
//         res.status(200).json(product);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// };

exports.getAllProducts = async (req, res) => {
    let products = await productService.getAllProducts({isDelete: false});
    res.status(200).json(products);
}

// exports.getProduct = async(req, res) => {
//     try {
//         let productId = req.query.productId;
//         let product = await Product.findOne({_id:productId, isDelete: false});
//         if(!product){
//             return res.status(404).json({message: `No Product Found with the given ID.`});
//         }
//         res.status(200).json({product});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// };

exports.getProduct =  async (req, res) => {
    let id = req.query.id;
    let product = await productService.getProduct({_id: id,isDelete: false});
    res.status(200).json(product);
}

// exports.updateProduct = async(req, res) => {
//     try {
//         let productId = req.query.productId;
//         let product = await Product.findById(productId);
//         if(!product){
//             return res.status(404).json({message : `No Product Found With the Given Id.`});
//         }
//         product = await Product.findOneAndUpdate({_id:product._id}, {$set : { ...req.body}}, { new : true});
//         res.status(200).json({product,message : `Product Updated SuccesFully`});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// };

exports.updateProduct = async (req, res) => {
    let id = req.query.id;
    let product = await productService.updateProduct({_id:id }, { isDelete: false, ...req.body , _id: undefined}, { new: true });
    console.log(req.body);
    res.status(201).json(product);
}

// exports.deleteProduct = async(req, res) => {
//     try {
//         let productId = req.query.productId;
//         let product = await Product.findById(productId);
//         if(!product){
//             return res.status(404).json({message : `No Product Found With The Given Id.`});
//         }
//         product = await Product.findOneAndUpdate({_id:product._id}, {isDelete: true},{new : true});
//         res.status(200).json({product,message : `This Product will be Deleted.`});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal Server Error`});
//     }
// }

exports.deleteProduct = async (req, res) => {
    let id = req.params.id;
    let product = await productService.deleteProduct({_id: id}, {isDelete: true}, {new: true});
}