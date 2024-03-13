const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'products'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    totalAmount: {
        type: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("orders", orderSchema);