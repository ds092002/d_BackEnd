

const http = require('http');

// Server 5
const server5 = http.createServer((req, res)=>{
    res.end('Welcome to Server 5');
});
server5.listen(7003,()=>{
    console.log('Server Start at port 7003');
});        