const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dhaval@123',
    database: 'dhaval'
});


connection.connect(() => {
    console.log('MySQL is Connected');
});

app.get('/', (req, res) => {
    res.send('WelCome To Express.');
});

app.post('/api/user', (req, res) => {
    const {firstName, lastName, email, password, mobileNo} = req.body;
    let user = {
        firstName, lastName, email, password, mobileNo
    };
    connection.query('insert into user set ?', user, (error, data) => {
        if(error){
            res.json(error);
        }else{
            res.json({ data, message: `User Added Successfuly`});
        }
    });
});

app.get('api/user', (req, res) => {
    connection.query('select * from user' ,(error, data) => {
        if (error) {
            res.json(error);
        } else {
            res.json(data);
        }
    });
});

app.get('/api/user/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    connection.query('select * from user where firstName =  ' + `"${id}"`,  (error, data) => {
        if (error) {
            res.json(error);
        } else {
            res.json(data);
        }
    });
});

app.listen(7777, () => {
    console.log('Server Start At http://localhost:7777');
})