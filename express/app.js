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

// app.use(myFun);
app.use(express.json()); // for parsing application/json responses from express server and sending them to express server with express middleware function
app.use(morgan("dev")); // development server for logging requests tomorgan server instead  of the console 
// app.use(morgan("combined")) //combined middle handler will log all requests and responses tomorgan and send them tomorgan middle handler with response headers and body
// app.use(morgan("common")) // common is the default one used when combined option is not specified in config file.
// app.use(morgan("short")); // short middle handler will log all requests and responses tomorgan and send them to the stream.
// app.use(morgan("tiny")); // tiny middle handler will log all requests and responses tomorgan and send them to the stream.
app.get('/',myFun,(req,res)=>{
    res.send('Welcome To Express JS');
});

app.post('/',(req,res)=>{
    res.send('Post Method')
});
app.listen(port,()=>{
    console.log(`Server Start At http://localhost:${port}`);
});