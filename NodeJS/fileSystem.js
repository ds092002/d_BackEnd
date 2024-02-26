const fs = require('fs');

const {add, product} = require('./basic.js');
// const {product} = require('./basic.js');
console.log(add(6,1));
console.log(product(7,1));

// Synchronously and Asynchronously Method

/* ======= File Open Method ======= */
// Asynchronously Method
// fs.open('abc.txt',(err)=>{
//     if (err) {
//         console.log('Failed to open file');
//     }else{
//         console.log('Successfully opened file');
//     }
// });
// fs.open('abc.txt', (err) => {
//     err ? console.log('Failed to open file') : console.log('Successfully opened file');
// });
  

// Synchronously Method
// fs.openSync('abc.txt');
// console.log('File opened');


/* ======= File Read Method ======= */

// Asynchronously Method
// let t1 = performance.now();

// console.log('Product Is : ', product(7,1));

// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('Failed to Read File');
//     }else{
//         console.log(data);
//     }
// });

// console.log("Addition is : ", add(8,1));

// let t2 = performance.now();
// console.log('Time Diffrence is : ', t2-t1);

// Synchronously Method
// let t1 = performance.now();
// console.log('Product Is : ', product(7,1));

// let data = fs.readFileSync('abc.txt','utf-8');
// console.log(data);

// console.log( 'Addition is : ',add(5,3));
// let t2 = performance.now();
// console.log('Time Diffrence is : ', t2-t1);


/* ======= File Write Method ======= */

// Asynchronously Method
// let txt = `#include <stdio.h>
// int main(){
//     printf("Hello World");
//     return 0;
// }`;

// fs.writeFile("basic.c",txt,(err,data)=>{
//     if (err) console.log("Failed To Writen File");
//     else console.log("Successfully Written File");
// });

// Synchronously Method
fs.writeFileSync('hello.c',txt);
console.log("File successfully written");


/* ======= File Append Method ======= */

// let txt = `// Good Morning`;
// fs.appendFile("hello.c",txt,(err,data)=>{
//     if (err) console.log("Failed To Append File");
//     else console.log("Successfully Appended File");
// });


/* ======= File Rename Method ======= */

// fs.rename('basic.c','hello2.c',(err)=>{
//     if (err) console.log("Failed To Rename File");
//     else console.log("Successfully Renamed File");
// });


/* ======= File Close Method ======= */

// fs.close(2,(err)=>{
//     if (err) console.log("Failed To Close File");
//     else console.log("Successfully Closed File");
// });