const express = require('express');
const app = express();
const port = 7001;
const path = require('path');
const morgan = require('morgan');

let myFun = (req, res, next) => {
    if((req.query.age) >= 18){
        next();
    }else{
        res.send('Sorry! You are not allowed to enter this page');
    }
}

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/hello',express.static(path.join(__dirname,'public','mahi.jpg')));
app.use('/mahi2',express.static(path.join(__dirname,'public','mahi2.jpg')));
app.use('/mahi3',express.static(path.join(__dirname,'public','mahi3.jpg')));
app.use('/video',express.static(path.join(__dirname,'public','videos.mp4')));
app.use('/panda',express.static(path.join(__dirname,'public','panda.mp4')));
app.use('/song',express.static(path.join(__dirname,'public','song.mp3')));
app.use(morgan('dev'));

app.get('/',myFun,(req,res)=>{
    res.send('index');
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('POST Method');
});
app.listen(port,()=>{
    console.log(`Server Start At http://localhost:${port}`);
});