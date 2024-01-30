// use dhaval
// show dbs
// show collection

// db.createCollection("user");

db.student.insertOne({
    name: "John",
    age : 20,
    email: "john@test.in",
    hobbies : ["Sport","Dancing"],
    teacher : "Girish"
});

db.student.insertMany([
    {
        name: "Smith",
        age : 22,
        email: "smith@test.in",
        subjects : ["Maths","Science"],      
        teacher : "Vivek"
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
        teacher : "Girish"
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
        teacher : "Nikunj"
    }
]);


db.teacher.insertMany([
    {
        name: "Girish",
        course: "BackEnd-Devlopment"
    },
    {
        name: "Vivek",
        course: "FrontEnd-Devlopment"
    },
    {
        name: "Nikunj",
        course: "UI/UX"
    },
    {
        name: "Kuldeep",
        course: "Mobile-Stack-Devlopment"
    }
]);

// db.student.find();
// db.student.findOne({name: "Disha"});