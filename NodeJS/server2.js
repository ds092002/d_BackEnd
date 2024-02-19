const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('../d_Mongodb/books.json', 'utf8')

// Server 2
const server2 = http.createServer((req, res)=>{
    // res.end('Welcome to Server 2');
    res.setHeader('Dummy','Dummy Data')
    res.end(data)
    res.end();
});
server2.listen(7000,()=>{
    console.log('Server Start at port 7000');
});
