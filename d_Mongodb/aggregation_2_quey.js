// db.books.find();

// db.books.aggregate([
//     {
//         $group: { _id: "$language",total : {$sum : 1}}
//     }
//     ])

// db.books.aggregate([
//     {
//         $group: { _id: {language: "$language",author:"$author"},total: {$sum: 1}}
//     }
//     ])

// db.books.aggregate([
//     {$match: {"pages" : {$lte : 209}}},
//     {
//         $group: { 
//             _id: {language: "$language"},
//             author: {$push: "$author"},
//             total : {$sum: 1}
//         }
//     }
//     ])