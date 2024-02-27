const express = require('express');
const app = express();
const port = 7001;
// const path = require('path');
const morgan = require('morgan');

let myFun = (req, res, next) => {
    if((req.query.age) >= 18){
        next();
    }else{
        res.send('Sorry! You are not allowed to enter this page');
    }
}

app.use(express.json());
app.use(morgan('dev'));

app.get('/',myFun,(req,res)=>{
    res.send('Welcome to the Express JS');
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('POST Method');
});
app.listen(port,()=>{
    console.log(`Server Start At http://localhost:${port}`);
});