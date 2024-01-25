 db.books.find()

 db.books.find({"pages" : {$eq : 176}});
 db.books.find({"pages" : {$ne : 384}});
 
 db.books.find({"pages" : {$gt : 176}});
 db.books.find({"pages" : {$gt : 928}});
 
 db.books.find({"pages" : {$gte : 176}});
 db.books.find({"pages" : {$gte : 928}});
 
 db.books.find({"pages" : {$lt : 185}});
 db.books.find({"pages" : {$lt : 505}});
 
 db.books.find({"pages" : {$lte : 505}});
 db.books.find({"pages" : {$lte : 928}});
 
 db.books.find({"pages" : {$in : [176,928,505]}});
 db.books.find({"pages" : {$in : [784,288,1024]}});
 db.books.find({"pages" : {$in : [209,160,226]}});

 db.books.find({"pages" : {$nin : [784,288,1024]}});
 db.books.find({"pages" : {$nin : [176,928,505]}});
 db.books.find({"pages" : {$nin : [209,160,226]}});