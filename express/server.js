const express = require('express');
const server = express();

const port = 7000;

server.get('/',(req,res)=>{
    res.end('Welcome To Local Server');
});
server.get('/product',(req,res)=>{
    res.end('Welcome To Product Page');
});
server.get('/user',(req,res)=>{
    res.end('Welcome To User Page');
});
server.get('/test',(req,res)=>{
    res.end('Welcome To Test Page');
});

server.listen(port,()=>{
    console.log( `Server is running at http://localhost:${port}`);
});