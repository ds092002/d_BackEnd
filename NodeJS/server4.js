


const http = require('http');

// Server 4
const server4 =  http.createServer((req, res)=>{
    res.end('Welcome to Server 4');
});
server4.listen(7002,()=>{
    console.log('Server Start at port 7002');
});
