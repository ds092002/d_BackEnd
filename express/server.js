const express = require('express');
const server = express();     // server created using Express library.
const path = require('path');   // used to resolve the file paths for static files.

// Set up the server to serve static files from the 'public' folder.

const port = 7000;

// server.get('/',(req,res)=>{
//     res.end('<h1 style="color: green;text-align: center;display: flex;justify-content: center;align-items: center;height: 40px;border: 5px solid yellow;border-radius: 5px;padding: 0 100px;box-sizing: border-box;">WelCome TO Server Page..</h1>');
// });
// server.get('/api',(req,res)=>{
//     res.end('<h1 style="color: yellow;text-align: center;display: flex;justify-content: center;align-items: center;height: 40px;border: 5px solid pink;border-radius: 5px;padding: 0 100px;box-sizing: border-box;">WelCOme TO API Page..</h1>');
// });
// server.get('/product',(req,res)=>{
//     res.end('<h1 style="color: orange;text-align: center;display: flex;justify-content: center;align-items: center;height: 40px;border: 5px solid purple;border-radius: 5px;padding: 0 100px;box-sizing: border-box;">WelCome To Product Page..</h1>');
// });
// server.get('/user',(req,res)=>{
//     res.end('<h1 style="color: blue;text-align: center;display: flex;justify-content: center;align-items: center;height: 40px;border: 5px solid red;border-radius: 5px;padding: 0 100px;box-sizing: border-box;">WelCome To User Page..</h1>');
// });
// server.get('/crome', (req, res) => {
//     res.end('<h1 style="color: red;text-align: center;display: flex;justify-content: center;align-items: center;height: 40px;border: 5px solid green;border-radius: 5px;padding: 0 100px;box-sizing: border-box;">WelCome To Crome Page..</h1>');
// });

server.post('/',(req,res)=>{
    res.send('Post Method');
});
server.get('/',(req,res)=>{
    res.end('Get Method');
});
server.put('/',(req,res)=>{
    res.status(400).json({message:'Put Method Call'});
});
server.patch('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'abc.txt'));
});
server.delete('/',(req,res)=>{
    res.sendStatus(201);
});

server.listen(port,()=>{
    console.log( `Server is running at http://localhost:${port}`);
});