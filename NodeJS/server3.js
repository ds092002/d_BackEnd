const http = require('http');
const fs = require('fs');
const data =  require('./hello.json');
// const data = fs.readFileSync('./hello.json', 'utf-8');
const port = 7001;
// console.log(data);

const app = http.createServer();

// app.on('request',(req, res) => {
//     console.log(req.url);
//     // res.end(data);
//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.write('<h1 style="color:yellow">Welcome to NodeJs</h1>');
//             res.end();
//             break;
//         case '/product':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(data);
//             break;
//         case '/user':
//             res.setHeader('Content-Type', 'text/html');
//             res.write('<h1 style="color:orange">Welcome to users</h1>');
//             res.end();
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.write('<h1 style="color:red">404 Not Found!</h1>');
//             res.end();
//             break;
//     }
// });

app.on('request',(req,res)=>{
    console.log(req.url);
    let item = req.url.split('/');
    console.log(item);

    if (item[1] === '') {
        res.setHeader('Content-Type','text/html');
        res.write('<h1 style="color:yellow">Welcome To User Page</h1>');
        res.end();
    }else if(item[1] === 'user'){
        res.setHeader('Content-Type','text/html');
        res.write('<h1 style="color:purple">Welcome To User Page</h1>');
        res.end();
    }else if(item[1] === 'product'){
        res.setHeader('Content-Type','application/json');
        if(item.length === 3){
            let id = Number(item[2]);
            let product = data[id-1];
            res.end(JSON.stringify(product));
        }else{
            res.end(JSON.stringify(data));
        }
    }else{
        res.setHeader('Content-Type','text/html');
        res.write('<h1 style="color:green">404 Page Not Found!</h1>');
        res.end();
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});