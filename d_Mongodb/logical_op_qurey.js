// db.books.find()

// db.books.find({$and: [{"pages" : {$eq: 384}},{"year" : 1350}]});
// db.books.find({$or: [{"pages" : {$eq: 384}},{"year" :{$in: [1610,1835,1952]}}]});
// db.books.find({$nor: [{"pages" : {$eq: 384}},{"year" :{$in: [1610,1835,1952]}}]});
db.books.find({"pages" : {$not: {$gte: 384}}});