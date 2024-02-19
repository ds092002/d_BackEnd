const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./hello.json', 'utf8');

// const server = http.createServer((req, res)=>{
    // res.end('Welcome to Server 2');
    // res.setHeader('Dummy','Dummy Data')
    // res.setHeader('content-type','application/json');
    // res.end(data);
    // res.end();
// });

const server = http.createServer();
server.on('request',(req, res)=>{
//     res.write('<h1 style="color:yellow">Hello World!</h1>');
//     res.write('Content-type','text/html)
//     res.end();
});

server.on('request',(req,res)=>{
    console.log(req.url);
    // res.setHeader('content-type', 'text/html');
    res.end(data);
})

server.listen(7000,()=>{
    console.log('Server Start at port 7000');
});
