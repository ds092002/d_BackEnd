const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./hello.json', 'utf-8');
const port = 7001;

const app = http.createServer((req, res) => {
    console.log(req.url);

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color:yellow">Welcome to NodeJs</h1>');
            res.end();
            break;
        case '/product':
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
            break;
        case '/user':
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color:orange">Welcome to users</h1>');
            res.end();
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1 style="color:red">404 Not Found!</h1>');
            res.end();
            break;
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
