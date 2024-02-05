/*======|Function|=====  */

// let x = function(a,b){return a * b };
// let z = x(4,3);
// console.log(z);


/* ======|Self - invoking Function ---   IIFE|===== */

// (function (a,b,c,d,e,f) {
    // console.log("Value is : ",a,b,c,d,e,f);
//     let x = "Hello ! I Called My Self";
    // console.log(x);
// })(1,2,3,4,5,6);


/*======| Function Constrcuctor |====== */

// const myFunction = new Function("a","b","return a * b");
// let x = myFunction(4,3);
// console.log(x);


/*======| Arrow Function |======*/

// ES5

// let x = function(x,y){
//     return x * y;
// }
// console.log(x(7,7));

// ES6

// let x = (x,y) => x * y;
// console.log(x(7,7));


/* ======| Function Are Object |======*/

// function myFunction(a, b, c) {
//     return a, b, c;
// }
// let text = myFunction(1, 2, 3);
// console.log(text);

// for string
// function myFunction(a,b){
//     return a * b;
// }
// let text = myFunction.toString();
// console.log(text(4,5));

// for Length
// function myFunction(a,b){
//     return arguments.length;
// }
// let text = myFunction;
// console.log(text(4,5));


/* ======| Arrow Function => |======*/

// ES5

// let x = function(x,y){
//     return x * y;
// }

// console.log(x(4,5));

// ES6

// const x = (x,y) => x * y;
// console.log(x(10,5));


/*======| Function Rest Parameters |======*/

// function sum(...args){
//     let sum = 0;
//     for (let i = 0; i < args.length; i++)
//             sum+=args[i];
//     return sum;
// }

// let x = sum(1,2,3,4,5,6,7,8,9,10);
// console.log(x);


/* ======| Argument Object |======*/

// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++)
//             sum += arguments[i];
//     return sum;
// }

// let x = sum(1,2,3,4,5,6,7,8,9);
// console.log(x);

/*=============================Classes====================================*/

// ======| function constructor |======

// const prodcut = function (a,b,c){
//     return a*b*c;
// }

// product();

// let a = new Function("x", "console.log(x)");
// let a = new Function("x", "y", "z", "console.log(x,y,z)");

// a(10,20,30);

//======| Self-invoking function (IIFE) |======

// (function (a,b,c,d,e,f){
//     console.log('value is: ',a,b,c,d,e,f);
// })(1,2,3,4,5,6);

//======| Arrow function (ES6) |======

// const prodcut = function (a,b,c){
//     return a*b*c;
// }

// let product = (a,b,c) =>{
//     return a*b*c;
// }
// let product = (a,b,c) => a*b*c;

// console.log(product(10,50,6));

//======| function object |======

// function myObject(){
//     return arguments;
// }

// let x = myObject(1,2,3,4,5);        // argument like as array
// console.log(x);

// function myObject(){
//     return arguments.length;
// }

// let x = myObject(1,2,3,4,5);        // argument like as array
// console.log(x.toString());

//======| Rest parameter   => spread operator (...) |======

// function Addition(...args) { 
//   let s = 0;
//   for (let i = 0; i < args.length; i++) {
//     s = s + args[i];
//   }
//   console.log(s);
// }
// function Addition() {
//   let s = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     s = s + arguments[i];
//   }
//   console.log(s);
// }

// Addition(1,2,3,5,4);


/*======| Argument Object |======*/

// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++)
//             sum += arguments[i];
//     return sum;
// }

// let x = sum(1,2,3,4,5,6,7,8,9);
// console.log(x);

//======| function generator => yield |======

// function* hello(a,b){
//   yield a+b;
//   yield a-b;
//   yield a*b;
//   return a/b;
// }

// let a = hello(10,5);

// console.log(a.next().value) // 1
// console.log(a.next().value) // 2
// console.log(a.next().value) // 3
// console.log(a.next().value) // 4

//======| this keyword |======

// let person = {
//   firstName: "Skill",
//   lastName: "Qode",
//   age: 25,
//   fullname: function(){
//     return this.firstName + " " + this.lastName + "\nage is: "+ this.age;
//   }
// }
// console.log(person.fullname())

// ======| call method |======

// let person = {
//   fullname: function (city) {
//     return this.firstName + " " + this.lastName + "\nCity name is: " + city;
//   },
// };

// let hello = {
//   firstName: "Skill",
//   lastName: "Qode",
// };

// let data = {
//   firstName: "Virat",
//   lastName: "Kohli",
// };

// console.log(person.fullname.call(data, "surat") );

//======| apply method |======

// let person = {
//   fullname: function (city) {
//     return this.firstName + " " + this.lastName + "\nCity : " + city;
//   },
// };

// let hello = {
//   firstName: "Skill",
//   lastName: "Qode",
// };

// let data = {
//   firstName: "Virat",
//   lastName: "Kohli",
// };

// console.log(person.fullname.apply(data, ["surat"]) );

//======| bind method |======

let person = {
    firstName: "Skill",
    lastName: "Qode",
    fullname: function (city) {
      return this.firstName + " " + this.lastName + "\nCity name is: " + city;
    },
  };
  
  let data = {
    firstName: "M.S",
    lastName: "Dhoni",
  };
  
  console.log(person.fullname("Surat"));
  let aa = person.fullname.bind(data, "Ranchi")();
  console.log(aa);
