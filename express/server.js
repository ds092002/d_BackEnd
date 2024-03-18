const express = require('express');
const server = express();
const path = require('path');
const ejs = require('ejs');

// server.set('view engine', 'ejs');
server.set('view engine', 'hbs')

server.get('/student',(req, res) => {
    let data = {
        Name: 'Joniyo',
        Course: 'Full-Stack Developer',
        Age: 19,
        Hobbies: ['Eating','Gym']
    }
    res.render('student', data);
});

//Pagina principal
// server.listen(7070 , ()=> console.log("Server is on port 7070"));

server.listen(7070, () => {
    console.log(`Server Start At http://localhost:7070`);
})