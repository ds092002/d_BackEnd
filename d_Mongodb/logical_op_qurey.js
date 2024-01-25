// db.books.find()

// db.books.find({$and: [{"pages" : {$eq: 384}},{"year" : 1350}]});
db.books.find({$not: [{"pages" : {$eq: 384}}]});