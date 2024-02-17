// http Module

const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Welcome To Local Server................................................................');
});  // http.createServer() method is used to create an HTTP server instance. It takes a callback function as its argument which will be called when the server is started

server.listen(9070,()=>{
    console.log('Server Start at port 9070');
})