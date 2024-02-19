// http Module

const http = require('http');

// Server 1
const server1 = http.createServer((req, res)=>{
    res.end('Welcome to Server 1');
});  // http.createServer() method is used to create an HTTP server instance. It takes a callback function as its argument which will be called when the server is started

server1.listen(9023,()=>{
    console.log('Server Start at port 9023');
});

