// use dhaval
// show dbs
// show collection

// db.createCollection("user");

db.student.insertOne({
    name: "John",
    age : 20,
    email: "john@test.in",
    hobbies : ["Sport","Dancing"],
    address : {
        line1 : '208, city-center',
        line2 :'YogiChowk',
        city : 'Surat',
        state : 'Gujarat',
        country : 'India',
        pincode : 560001
    }
});

db.student.insertMany([
    {
        name: "Smith",
        age : 22,
        email: "smith@test.in",
        subjects : ["Maths","Science"],      
    },
    {
        name: "Priya",
        gender : "Female",
        email: "priya@test.in",
        subjects : {
            Maths : 100,
            Science : 90,
            English : 80
        },
    },
    {
        name: "Disha",
        gender : "Female",
        age : 22,
        subjects : {
            Maths : 90,
            Science : 80,
            English : 70
        },
    },
])


// db.student.find();
// db.student.findOne({name: "Disha"});