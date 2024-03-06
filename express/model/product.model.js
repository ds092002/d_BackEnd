const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type: String
    },
    description : {
        type: String
    },
    price : {
        type: Number
    },
    category : [{
        type: String
    }],
    isDelete : {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('products',productSchema);



// {
//     "title" : "Lloyd AC",
//     "description" : "1.5 Ton 5 Star Inverter Split AC",
//     "price" : 48000,
//     "category" : "Electronic, AirConditinor"
// }
// {
//     "title" : "Samsung Refrigerator",
//     "description" : "Samsung 653 L, 3 Star, Frost Free, Convertible 5-in-1 Digital Inverter, Side By Side AI Enabled Smart Refrigerator with WiFi",
//     "price" : 82000,
//     "category" : "Electronic, Refrigerator"
// }
// {
//     "title" : "IFB Washingmachine",
//     "description" : "IFB 8 Kg 5 Star AI Powered Fully Automatic Front Load Washing Machine, 2X Power Steam (SENATOR NEO SXS 8012, 2023 Model, Silver, In-built Heater, 4 years Comprehensive Warranty",
//     "price" : 32000,
//     "category" : "Electronic, Washingmachine"
// }
// {
//     "title" : "Puma Shoe",
//     "description" : "Puma Mens Wish MaxWalking Shoe",
//     "price" : 1799,
//     "category" : "Sheo"
// }
// {
//     "title" : "Royal Enfield Hunter 350",
//     "description" : "The Hunter 350 is one good looking motorcycle ",
//     "price" : 149900,
//     "category" : "Vehical"
// }
// {
//     "title" : "WildHorn Wallet",
//     "description" : "WildHorn Leather Wallet for Men I Ultra Strong Stitching I 6 Credit Card Slots I 2 Currency Compartments I 1 Coin Pocket",
//     "price" : 499,
//     "category" : "Wallet"
// }
// {
//     "title" : "Skybags",
//     "description" : "Skybags One Size Brat Black 46 Cms Casual Standard Backpack",
//     "price" : 499,
//     "category" : "Bag"
// }
// {
//     "title" : "HotWheels Cars",
//     "description" : "FAST & FURIOUS :: HOT WHEELS SET OF 8",
//     "price" : 1200,
//     "category" : "Toy, Cars"
// }
// {
//     "title" : "Samsung S23 FE",
//     "description" : "Fan's Edition Phone",
//     "price" : 68000,
//     "category" : "Electronic, smartphone"
// }
// {
//     "title" : "Samsung S24",
//     "description" : "Best AI Phone",
//     "price" : 168000,
//     "category" : "Electronic, smartphone"
// }