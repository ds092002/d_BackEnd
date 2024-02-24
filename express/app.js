const express = require('express');
const app = express();
const port = 7000;
const morgan = require('morgan');

// middleware
let myFun = (req, res, next) => {
    // console.log(req.query);

    if((req.query.age) >= 18){
        next();
    }else{
        res.send('Sorry! You are not allowed to enter this page');
    }
}

app.use(express.json())
app.use(morgan("dev"));
app.get('/',myFun,(req,res)=>{
    res.send('Welcome To Express JS');
});

app.post('/',(req,res)=>{
    res.send('Post Method')
});
app.listen(port,()=>{
    console.log(`Server Start At http://localhost:${port}`);
});