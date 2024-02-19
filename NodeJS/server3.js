


const http = require('http');

// Server 3
const server3 = http.createServer((req, res)=>{
    res.end('Welcome to Server 3');
});
server3.listen(7001,()=>{
    console.log('Server Start at port 7001');
});    
