// http Module

const http = require('http');

// Server 1
const server1 = http.createServer((req, res)=>{
    res.end('Welcome to Server 1');
});  // http.createServer() method is used to create an HTTP server instance. It takes a callback function as its argument which will be called when the server is started

server1.listen(9023,()=>{
    console.log('Server Start at port 9023');
});

// Server 2
const server2 = http.createServer((req, res)=>{
    res.end('Welcome to Server 2');
});
server2.listen(7000,()=>{
    console.log('Server Start at port 7000');
});

// Server 3
const server3 = http.createServer((req, res)=>{
    res.end('Welcome to Server 3');
});
server3.listen(7001,()=>{
    console.log('Server Start at port 7001');
});    

// Server 4
const server4 =  http.createServer((req, res)=>{
    res.end('Welcome to Server 4');
});
server4.listen(7002,()=>{
    console.log('Server Start at port 7002');
});

// Server 5
const server5 = http.createServer((req, res)=>{
    res.end('Welcome to Server 5');
});
server5.listen(7003,()=>{
    console.log('Server Start at port 7003');
});        