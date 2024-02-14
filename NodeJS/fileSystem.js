const fs = require('fs');

// Synchronously and Asynchronously Method

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
fs.openSync('abc.txt');
console.log('File opened');