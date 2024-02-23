const express = require('express');
const server = express();     // server created using Express library.
const path = require('path');   // used to resolve the file paths for static files.

// Set up the server to serve static files from the 'public' folder.

const port = 7000;

// server.get('/',(req,res)=>{
//     res.end('Welcome To Local Server');
// });
// server.get('/product',(req,res)=>{
//     res.end('Welcome To Product Page');
// });
// server.get('/user',(req,res)=>{
//     res.end('Welcome To User Page');
// });
// server.get('/test',(req,res)=>{
//     res.end('Welcome To Test Page');
// });

server.post('/')

server.listen(port,()=>{
    console.log( `Server is running at http://localhost:${port}`);
});