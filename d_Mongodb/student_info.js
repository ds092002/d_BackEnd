db.students.insertOne({
  FirstName: "Dhaval",
  LastName: "Solanki",
  Gender: "Male",
  Age: 21,
  Email: "dd@gmail.com",
  Address: {
    Line1: "A-18 , Haridham Soc,Near Archana School",
    City: "Surat",
    State: "Gujarat",
    Country: "India",
    Pincode: 395010,
  },
  Subjects: {
    Maths: 99,
    Science: 99,
    English: 99,
  },
});

db.students.insertMany([
  {
    FirstName: "Vijay",
    LastName: "Solanki",
    Gender: "Male",
    Age: 22,
    Email: "Vijay@gmail.com",
    Address: {
      Line1: "518 , Matrushakti Soc; Punagam Road",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Darshan",
    LastName: "Chauhan",
    Gender: "Male",
    Age: 18,
    Email: "darshan@gmail.com",
    Address: {
      Line1: "C-9 , RaviPark Soc; Punagam Road",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Jenil",
    LastName: "Kakadiya",
    Gender: "Male",
    Age: 18,
    Email: "jenil@gmail.com",
    Address: {
      Line1: "54 Ayodhya Nagar Yogi Chowk",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Krish",
    LastName: "Ranghani",
    Gender: "Male",
    Age: 18,
    Email: "krish@gmail.com",
    Address: {
      Line1: "32 Ashok Vatika,Nana Varchha",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Bhautik",
    LastName: "Dudhat",
    Gender: "Male",
    Age: 18,
    Email: "bhautik@gmail.com",
    Address: {
      Line1: "204 Pushp Van,Mota Varchha",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Mahendra",
    LastName: "Purohit",
    Gender: "Male",
    Age: 18,
    Email: "mahendra@gmail.com",
    Address: {
      Line1: "456 Sarita Vihar ,Puna - Bombay Road",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Vrishabh",
    LastName: "Jogani",
    Gender: "Male",
    Age: 18,
    Email: "vrishabh@gmail.com",
    Address: {
      Line1: "12 Tirupati Soc; Yogi Chowk ",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Vijay",
    LastName: "Vekariya",
    Gender: "Male",
    Age: 35,
    Email: "vijayv@gmail.com",
    Address: {
      Line1: "c-360 Anand Vatika,Yogi Chowk ",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Vijay",
    LastName: "Dankhara",
    Gender: "Male",
    Age: 26,
    Email: "vijayv@gmail.com",
    Address: {
      Line1: "D 62 SitaNagar,PunaGam Road",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Srushti",
    LastName: "Sojitra",
    Gender: "Female",
    Age: 20,
    Email: "srushti@gamil.com",
    Address: {
      Line1: "D 62 SitaNagar,PunaGam Road",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
  {
    FirstName: "Monika",
    LastName: "Katheriya",
    Gender: "Female",
    Age: 20,
    Email: "mk@gmail.com",
    Address: {
      Line1: "A 23 KiranPark,PunaGam Road",
      City: "Surat",
      State: "Gujarat",
      Country: "India",
      Pincode: 395010,
    },
    Subjects: {
      Maths: 99,
      Science: 99,
      English: 99,
    },
  },
]);


// find
db.students.findOne({FirstName: "Dhaval"})

// update
db.students.updateOne(
  {FirstName: "Dhaval"},
  {$set: {Email: "dhaval@gmail.com"}},
  {upsert: true}
);
db.students.updateOne({FirstName: "Monika"},{$set: {Subjects: {Maths: 20, Science: 30, English: 30}}},{upsert: true});
db.students.updateOne({_id: ObjectId('65b0dc3235200225a717e267')},{$set: {Subjects: {Maths: 50, Science: 50, English: 50}}},{upsert: true});
db.students.updateMany({},{$set: {Course: 'Full-Stack Devlopment'}},{upsert: true});
db.students.updateOne({LastName: "Vekariya"},{$set: {Course: 'BackEnd Devlopment'}},{upsert: true});

// delete

db.students.deleteOne({_id: ObjectId('65b0dc3235200225a717e267')});
db.students.deleteMany({});

// drop
db.client_master.drop();
