const Product = require('../model/product.model');
module.exports = class ProductServices {
    async addNewProduct(body){
        try {
            return await Product.create(body)
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    async getAllProducts(body){
        try {
            return await Product.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    async getProduct(body){
        try {
            return await Product.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
    async updateProduct(body) {
        try {
            return await Product.findOneAndUpdate({ _id: body._id }, { $set: { ...body } }, { new: true });
        }catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Product update failed', message: error.message });
        }
    }
    async deleteProduct(body){
        try {
            return await Product.findOneAndUpdate(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}

