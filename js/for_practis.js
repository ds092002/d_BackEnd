// JavaScript is a powerful programming language that can add interactivity to a website
// It was invented by Brendan Eich in 1997.

// output method :

// 1). console.log();
// 2). alert(" ");
// 3). document.write(" ");

// Q).JavaScript contains a which type of library ?
// => A).JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.


// Ways to Declare a JavaScript Variable:
// 3 type
// ● Using var x = 5;
// ● Using let y = 10;
// ● Using const d = 7;
// ● Using nothing

// var x = 10;
// var y = "World"
// console.log("X is : "+x);    // 10
// console.log("Hello "+y);     // Hello World
// alert("Hello One!!!!");
// document.write("Lerning JS",x);   // Lerning JS 10

// var x = 10;
// console.log("out",x);    // 10

// {
//     var x = 7;
//     console.log("in",x);   // 7
// }
// console.log(x);  // 7

// let x = 10;
// console.log("out",x);   // 10

// {
//     let x = 7;
//     console.log("in",x);  // 7
// }
// console.log(x);  // 10

// const x = 10;
// console.log("out",x);   // 10

// {
//     const x = 7;
//     console.log("in",x);  // 7
// }
// console.log(x);  // 10


/* Hoisting */

// console.log(a);
// var a;     // undefine

// console.log(a);
// let a = 10;



/* Operators */

// Operators and Operands
// The numbers or variables (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an
// operator.

// 1. Arithmetic => + - * / % **(Exponentiation) ++(Increment)
// 2. Relational / Comparison  => < <= > >= == != === !== ?:
// 3. Assignment  =>  = += -= *= /= %= **=
// 4. Logical  =>  &&(Logical And) ||(Logical Or) !(Logical Not) ^(XOR)
// 5. Type of


// let x = 10 , y = 20 , z;

// Arithmetic =>
// console.log(x+y);    //30
// console.log(x-y);    //-10
// console.log(x*y);    //200
// console.log(y/x);    //2
// console.log(x%y);    //10
// console.log(y%x);    //0
// console.log(5**4);   //625
// // console.log(++x);    // 11
// // console.log(x++);    // 11
// console.log(x--);    // 10
// console.log(--x);    // 8


// Relation =>
// console.log(x>y);    // false
// console.log(x<y);    // true
// console.log(x>=y);    // false
// console.log(x<=y);    // true
// console.log(x==y);    // false
// console.log(x!=y);    // true
// console.log(10!='10');    // false
// console.log(10=='10');    // true
// console.log(1==true);    // true
// console.log(1!=true);    // false
// console.log(0!=true);    // true
// console.log(0==true);    // false
// console.log(1==false);    // false
// console.log(1!=false);    // true
// console.log(0!=false);    // false
// console.log(0==false);    // true
// console.log(10==='10');   // flase
// console.log(10===10);   // true
// console.log(x===y);   // false
// console.log(x!==y);   // true
// console.log((x>y)?"True" : "False");   // False
// console.log((11>3)?"True" : "False");  // True



//  Assignment =>
// let z = x;
// console.log(z);    // 10
// console.log(x);    // 10
// console.log(x+=y);   // x = x + y  => 10 + 20 = 30
// console.log(x-=y);   // x = x - y  => 10 - 20 = -10
// console.log(x*=y);   // x = x * y  => 10 * 20 = 200
// console.log(x/=y);   // x = x / y  => 10 / 20 = 0.5
// console.log(y/=x);   // y = y / x  => 20 / 10 = 2
// console.log(y%=x);   // y = y % x  => 20 % 10 = 2
// console.log(x%=y);   // x = x / y  => 10 / 20 = 10
// console.log(5**=2);     // 25



// z = ++x && --y;   // 11 , 19 , 19
// z = --x && ++y;   //  9 , 21 , 21
// z = x++ && ++y;   // 11 , 21 , 21
// z = ++x && ++y;   // 11 , 21 , 21
// z = ++x && y++;   // 11 , 21 , 20
// z = x++ && y++;   // 11 , 21 , 20
// z = x-- && y--;   //  9 , 19 , 20
// z = ++x || --y;   // 11 , 20 , 11
// z = --x || ++y;   //  9 , 20 , 9
// z = x++ || ++y;   // 11 , 20 , 10
// z = ++x || ++y;   // 11 , 20 , 11
// z = ++x || y++;   // 11 , 20 , 11
// z = x++ || y++;   // 11 , 20 , 10
// z = x-- || y--;   //  9 , 20 , 10
// console.log(x,y,z);
// z = 40;
// console.log(x,+y,z);
// console.log(x != y);   // true
// console.log(1^1);   // 0
// console.log(0^1);   // 1
// console.log(0^0);   // 0
// console.log(1^0);   // 1
// console.log(1^0^1);   // 0
// console.log(1^1^1);   // 1
// console.log(0^1^1);   // 0
// console.log(0^1^0);   // 1
// console.log(0^0^0);   // 0

// console.log(null===NaN);   // false
// console.log(null==NaN);   // false
// console.log(null==undefined);   // true
// console.log(null===undefined);   // true
// console.log(NaN===NaN);


// console.log(typeof(10));
// console.log(typeof('10'));
// console.log(typeof(true));
// console.log(typeof(10 - 5));
// console.log(typeof(10 - "5"));
// console.log(typeof('10' - "5"));

/* Conditional Statement*/

// let a = Number(prompt('Enter a : '))
// let b = Number(prompt('Enter b : '))

// if (a>b) {
//     console.log("big");
// }else{
//     console.log("small");
// }

// a = 10210111;
// console.log(typeof(a));
// console.log(typeof(`PASS`));


// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values. Checks the equality of two operands without considering their type. Compares equality of two operands with their types.


/* MAP Method */

// hold key-value pairs   EX:- "BMW",100   key :- BMW , value :- 100

// let data = new Map([["BMW",100],["Audi",200],["VOLVO",300]]);
// console.log(data);

// data.set("Thar",400);
// console.log(data);
// console.log(data.get("VOLVO"));
// console.log(data.set("Neno",600));
// data.delete("Neno");
// console.log(data);
// console.log(data.has("Neno"));
// console.log(data.entries());
// console.log("Map Size : ",data.size);

// let txt = "";
// data.forEach((val , str) =>{
//     txt = txt + str + " => " + val + "\n";
// });
// console.log(txt);


/* SET Method */

// set is a collection of unique value. each value can an occur once in set


// let arr = new Set(["BMW","Volvo","Audi"]);
// console.log(arr);

// arr.add("Thar");
// console.log(arr);
// console.log(arr.add("Benz"));
// arr.delete("Benz");
// console.log(arr);
// console.log(arr.has("Benz"));
// // arr.clear();
// // console.log(arr);
// console.log(arr.entries());
// console.log("SET Size : ",arr.size);

// let txt = "";
// arr.forEach((str) => {
//     txt = txt + str + "\n";
// });
// console.log(txt);


/* String */


// collection of characters (array)

// let txt;
// let str = "Hello World";
// let str = 'Skill Qode'
// console.log(str);
// txt = 'Hello " Indian '
// txt = 'My Name Is "Dhaval"'
// console.log(txt);

let data = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.";    // 110

// let a = data.length
// console.log(a);
// console.log(data.length);

// end position not include in slice
// console.log(data.slice(5,12));
// console.log(data.slice(-16,-8));
// console.log(data.slice(-5));
// console.log(data.slice(-7));

// substring() is similar to slice().
// console.log(data.substring(7,19));
// console.log(data.substring(-4,5));
// console.log(data.substring(-4,13));


// substr() is similar to slice(). but the difference is that second perameter is specifies the length.
// console.log(data.substr(14,5));
// console.log(data.substr(-7,7));

// replace() method replace a specified value with another value
// console.log(data.replace("JavaScript","C"));
// console.log(data.replace(/JavaScript/g,"C++"));

// console.log(data.replaceAll("language","Devloper"));
// console.log(data.replaceAll("is ","are "));

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// let data2 = 'String Methods';
// console.log(data.concat("  ",data2).concat(". String to rest of all String"));


// console.log(data);
// console.log(data.trim());
// console.log(data.trimStart());
// console.log(data.trimEnd());

// const d = "Dhaval";
// console.log(d.padStart(9,"007"));
// let txt = "Hello";
// console.log(txt.padStart(8,"XXX"));

// const d = "Dhaval";
// console.log(d.padEnd(9,"007"));
// let t = "Hello";
// console.log(t.padEnd(8,"XXX"));
// let txt = "1234";
// console.log(txt.padEnd(8,"*"));
// console.log(txt.padEnd(8,"*").concat(9));


// chatAt return the string charecter with using  index number
// console.log(data.charAt(24));

// charCodeAt return the string charecters Ascci Value with using  index number and they return a UTF-16 Code in between 0 and 65535.
// console.log(data.charCodeAt(24));


// split() method is convert sting to array
// console.log(data.split(" "));



/* Math Object */

// console.log(Math.E);   // return euler's number 2.718281828459045
// console.log(Math.PI);

// console.log(Math.round(4.2));    // return nearest integer
// console.log(Math.round(4.6));
// console.log(Math.round(-4.9));

// console.log(Math.ceil(5.1));      // return Ronud up value
// console.log(Math.ceil(8.2));
// console.log(Math.ceil(-6.5));

// console.log(Math.floor(4.6));     // return Round Down value
// console.log(Math.floor(7.2));
// console.log(Math.floor(-7.2));

// console.log(Math.trunc(7.79789));    // removing fectorial digit
// console.log(Math.trunc(-8.23));

// console.log(Math.sign(7));   // return negetive , positive , null
// console.log(Math.sign(0));
// console.log(Math.sign(-7));

// console.log(Math.pow(4,4));    // return x to the power of y
// console.log(Math.pow(10,4));

// console.log(Math.sqrt(256));      // return squre root of number
// console.log(Math.sqrt(625));
// console.log(Math.sqrt(25));

// console.log(Math.abs(-7));      // return absolute (positive) number
// console.log(Math.abs(-2.23));
// console.log(Math.abs(.23));

// console.log(Math.min(52,63,10,2,8,7));
// console.log(Math.max(52,63,10,2,8,7));

// console.log(Math.random());



/*
    Math.E eluer number
    Math.PI pi number
    Math.round  return nearest number
    Math.ceil   return round up value
    Math.floor return round down value
    Math.trunc  remove fectorial digit
    Math.abs  return absolute (positive) number
    Math.pow  return x power by y
    Math.min  return minimum number
    Math.max  return maximum number
    Math.sqrt  return squre root
    Math.sign  return negitive, positive , null number
*/



/* Date Method */

// let d = new Date();
// console.log(d);
// let d = new Date("2024-03-09 06:30 AM")
// console.log(d);
// let d = new Date(2024,9,2,5,18,62)    // => year,month,date,hour,min.sec  => month = 0 - 11
// console.log(d);

// console.log(d.toString());    //Tue Dec 26 2023 17:47:27 GMT+0530 (India Standard Time)
// console.log(d.toDateString()); //Tue Dec 26 2023
// console.log(d.toISOString()); //2023-12-26T12:18:14.854Z
// console.log(d.toUTCString()); // Tue, 26 Dec 2023 12:18:24 GMT
// console.log(d.toLocaleDateString()); // 26/12/2023
// console.log(d.toLocaleTimeString());//17:48:37
// console.log(d.toLocaleString()); //26/12/2023, 17:48:43

// console.log(d.getFullYear());    // get year in four digit
// console.log(d.getMonth());      // get month in  (0-11)
// console.log(d.getDate());       // get Date in (1-31)
// console.log(d.getDay());        // get Weekday in (0-6)
// console.log(d.getHours());      // get hours (0-23)
// console.log(d.getMinutes());    // get minites (0-59)
// console.log(d.getSeconds());    // get seconds (0-59)
// console.log(d.getMilliseconds()); // get millisec (0-999)
// console.log(d.getTime());       // get Time since january 1, 1970
// console.log(d.getTimezoneOffset());

// d.setFullYear(2023);
// d.setMonth(2);
// d.setDate(9);
// d.setHours(6);
// d.setMinutes(30);
// d.setSeconds(30);
// d.setMilliseconds(999);
// //d.setTime(1615645665566);
// console.log(d);



// let data = "777";
// console.log(data);
// console.log(Number(data));

// let data = 12.47995404;
// console.log(data);
// console.log(data.toString());
// console.log((12+4565).toString());

// let x = 2.718281828459045;
// console.log(x.toExponential(8));
// console.log(x.toExponential(6));
// console.log(x.toExponential(5));
// console.log(x.toExponential(4));
// console.log(x.toExponential(2));

// let x = 2.718281828459045;
// console.log(x.toFixed(8));
// console.log(x.toFixed(2));
// console.log(x.toFixed(6));

// let x = 2.718281828459045;
// console.log(x.toPrecision(10));
// console.log(x.toPrecision(6));

// let x = 2.718281828459045;
// console.log(x.valueOf());
// console.log((45+65).valueOf());


// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("98 "));
// console.log(Number(" 69"));
// console.log(Number(" 69   "));
// console.log(Number("143.69"));
// console.log(Number("13,69"));
// console.log(Number("13 69"));
// console.log(Number("D2"));

// console.log(parseInt('-20'));
// console.log(parseInt('-20.7'));
// console.log(parseInt('7'));
// console.log(parseInt('7 8 9'));
// console.log(parseInt('25 year'));
// console.log(parseInt('year 02'));

// console.log(parseFloat('496'));
// console.log(parseFloat('-496.745'));
// console.log(parseFloat('   56 '));
// console.log(parseFloat('45   '));
// console.log(parseFloat('  5    '));
// console.log(parseFloat('745 old'));
// console.log(parseFloat(' bvyhui 6458'));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(-1.7));
// console.log(Number.isInteger(6.7));

// console.log(Number.isSafeInteger(45595495954945555544145612121020202));
// console.log(Number.isSafeInteger(45.26));

// console.log(Number.parseFloat("456"));
// console.log(parseFloat("456"));




/* Function */

// hello();

// function hello() {
//     console.log("hello world");
// }
// hello();

// function Add(a,b) {
//     console.log(a+b);
// }
// Add(10,"D");

// function Product(a,b,c) {
//     return a * b * c;
// }
// // let x = Product(1,5,6);
// // console.log(x);
// console.log(Product(5,6,3));

// let x = function (a,b) {return a * b};     // anonymous function
// console.log(x(10,20));


// const myFunction = function(){
//     console.log("SkillQode-Decode Your Skill");
// }
// myFunction();


// (function (a,b,c,d) {
//     console.log("Value of : ",a+b+c+d);
//     let e  = "Hello ! I called My self";
//     console.log(e);
// })(1,2,3,4);


// let myFunction = new Function("a","b","return a * b");
// let x = myFunction(5,5);
// console.log(x);


// let x = (a,b) => a * b;
// console.log(x(7,5));


// function myFunction(a,b) {
//     return a * b;
// }
// let txt = myFunction(4,4);
// console.log(txt);

// function myFunction(a,b){
//     return a - b;
// }
// let t = myFunction.toString();
// console.log(t(30,20));
// function myFunction(a,b){
//     return a * b;
// }
// let text = myFunction(45,56);
// console.log(text.toString());
// function myFunction(a,b) {
//     return arguments.length;
// }
// let t = myFunction;
// console.log(t(4,5));


// function sum(...array) {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++) {
//         sum+=array[index];
//     }
//     return sum;
// }
// let x = sum(1,2,3,4,5,6,7);
// console.log(x);


    // function sumAll(){
    //     let sum = 0;
    //     for (let index = 0; index < arguments.length; index++) {
    //         sum += arguments[index];
    //     }
    //     // console.log(sum);
    //     return sum;
    // }
    // x = sumAll(1,123,500,115,44,88);
    // console.log(x.toString());

    // for (var index = 1; index <= 5; index++) {
    //     setTimeout(function(){
    //         console.log(index);
    //     },100);
    // }


// const prodcut = function (a,b,c) {
//     return a + b + c;
// }
// let a = prodcut(1,2,3);
// console.log(a);

// let a = new Function("x","console.log(x)");
// let a = new Function("x","y","z","console.log(x+y+z)");
// a(10,20,30);


// (function(a,b,c,d,e){
//     console.log(a+b+c+d+e);
//     console.log("I Invoking my self");
// })(10,20,30,40,50);

// let product = (a,b,c) =>{
//     return a * b * c;
// }
// console.log(product(10,20,30));

// function myObject(){
//     return arguments;
// }
// let s = myObject(1,2,3,4);
// console.log(s);

// function myObject(){
//     return arguments.length;
// }
// let s = myObject(1,2,3,4,5,6,7,8,9);
// console.log(s.toString());

// function sum(){
//     let sum = 0;
//     for(let i = 0 ; i< arguments.length; i++)
//     sum += arguments[i];
// return sum;
// }
// let s = sum(1,2,3,4,5,6);
// console.log(s);

// function* hello(a,b){
//     yield a+b;
//     yield a-b;
//     yield a*b;
//     yield a*b;
//     return a/ b;
// }
// let a = hello(10,5);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);


// let person = {
//     firstName : "Dhaval",
//     lastName : "Solanki",
//     age : 21,
//     fullName : function () {
//         return this.firstName + " " + this.lastName + "\nage is : " + this.age;
//     }
// }
// console.log(person.fullName().toUpperCase());


// let person = {
//     fullName : function (city) {
//         return this.firstName + " " + this.lastName + "\nCity Name is : " + city;
//     },
// };

// let data = {
//     firstName : "M.S.",
//     lastName : "Dhoni",
// };
// console.log(person.fullName.call(data,"Ranchi"));

// let person = {
//     fullName : function (city){
//         return this.firstName + " " + this.lastName + "\nCity Name is : " + city;
//     },
// };

// let data = {
//     firstName : "M.S.",
//     lastName : "Dhoni",
// };

// console.log(person.fullName.apply(data,["Ranchi"]));


// let person = {
//     firstName : "Skill",
//     lastName : "Qode",
//     fullName : function(city){
//         return this.firstName + " " + this.lastName + "\nCity Name is : " + city;
//     },
// };

// let data = {
//     firstName : "M.S.",
//     lastName : "Dhoni",
// };

// console.log(person.fullName("Surat"));
// let a = person.fullName.bind(data,"Ranchi")();
// console.log(a);



/* == Array == */

// let data = [11,22,33,44,55];
// console.log(data);
// console.log(data.length);

// data.push(66);
// data.push(77);
// data.push(88);
// console.log(data);
// console.log(data.length);

// data.pop();
// console.log(data);
// console.log(data.length);

// // data.shift();
// // console.log(data);
// // console.log(data.length);

// // data.push(88);
// // data.unshift();
// // console.log(data);
// // console.log(data.length);

// data[0] = 11;
// console.log(data);
// console.log(data.length);

// let data1 = [99,100,110,120];
// let a = data.concat(data1);
// console.log(a);
// console.log(a.length);

// a.splice(1,0,22)
// console.log(a);
// console.log(a.length);

// // a.slice(2,1);
// // console.log(a);
// console.log(data.slice(1,6));

// let b = ["Watermelon","Kiwi","Orange","Mango","Apple","Banana"];
// // console.log(b.sort());
// let ar = [56,98,32,1,78,9,7,60,43,25,11,15];
// // console.log(ar.sort((a,b) => a - b));
// console.log(b.sort());
// console.log(b.reverse());

// console.log(ar.sort((a,b) => a - b));
// console.log(ar.reverse());

// MaxNum = (a) =>{
//     return Math.max.apply(null,a);
// };
// console.log(MaxNum(ar));

// Minnum = (a) => {
//     return Math.min.apply(null,a);
// };
// console.log(Minnum(ar));

// const numbers = [45, 4, 9, 16, 25];
// const sum = numbers.reduce(myFunction);
// function myFunction(total, value, index, array) {
// return total + value;
// }
// console.log(sum);
// let s = "";
// data.forEach((val,ind)=>{
//     s = s + " " + val;
// })
// console.log(s);


// // let dd = [];
// // dd = data.map((val,ind) =>{
// //     return val * 2;
// // })
// // console.log(dd);

// let dd = [];
// dd = data.filter((val,ind)=>{
//     // return val >= 50;
//     return val <= 50;
// })
// console.log(dd);

// let abc;
// abc = data.reduce((a,val,index)=>{
//     return a + val;
// })
// console.log(abc);

// let abc;
// abc = data.reduceRight((a,val, index)=>{
//     return a + val;
// })
// console.log(abc);

// let abc ;
// abc = data.every((val,index) => {
//     return val <= 88;
// })
// console.log(abc);.

// let abc ;
// abc = data.some((val,ind)=>{
//     return val < 5;
// })
// console.log(abc);

// let abc = data.find((val,ind)=>{
//     return val >= 25;
// })
// console.log(abc);

// let abc = data.findIndex((val,ind)=>{
//     return val > 55;
// })
// console.log(abc);

// let abc = data.entries();
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);


// let abc = data.includes(22);
// console.log(abc);

// let abc = [11,22,33,44,55,66,77,88]
// console.log(abc.copyWithin(0,3,6));
// console.log(abc.copyWithin(2,4,7));


/* ==Object== */


// let person = {
//     age : 21,
//     greet : function (){
//         return ("Hello Good Evevning");
//     }
// };
// person.name = "Dhaval";
// person.nationaltiy = 'Indian';
// console.log(person.age);
// console.log(person.greet());
// console.log(person);

// delete person.age;
// console.log(person);

// console.log(person.name);
// console.log(person["greet"]());


// let person = {
//     name : 'priya',
//     age : 20,
//     marks : {
//         ba : 21,
//         eco : 11,
//         eng : 10
//     },
//     hobbies : ["Cheating","Reading","Writing"]
// };

// console.log(person);
// console.log(person.marks);
// console.log(person.marks.ba);
// console.log(person.hobbies);



/* ==Class== */

// class Person{
//     constructor(name,city){
//         this.name = name;
//         this.city = city;
//     }greet(){
//         return ("Hello I am " + " " + this.name + "\nLives In : " + this.city);
//     }
// }

// let priya = new Person("priya","hell");
// console.log(priya.greet());

// class person {
//     constructor(name,city){
//         this.name = name;
//         this.city = city;
//     }greet(){
//         return ("Hello " + " " + this.name + "\nLives In  : " + this.city);
//     }
// }
// let d = new person("Priya","Cheter")
// console.log(d.greet());



/* ==SetTimeout== */

// {
// function greet(){
//     console.log('`hello world`');
// }
// greet();
// setTimeout(greet,5000);
// console.log('hu pelo avish');
// }

// {
// function greet(){
//     console.log('Hello World....');
// }
// greet();
// setTimeout(greet,3000);
// console.log('This Message is Shown First ');
// console.log('1 Today to much Rain...');
// }

// {
// function dd() {
//     console.log("HEloloknwdcn");
// }
// dd();
// setTimeout(dd,10000);
// }

// {
// function greet(){
//     console.log("Hello World!");
// }
// let intervalID = setTimeout(greet,4000);
// console.log('ID : ',intervalID);
// clearInterval(intervalID);      // clear interval function is stop settimeout function
// }

// {
//     function showTime(){
//         let dataTime = new Date();
//         let time = dataTime.toLocaleTimeString();
//         console.log(time);
//         setTimeout(showTime,3000);
//     }
//     showTime();
// }

// {
//     let count = 0;

//     function incres(){
//         count += 1;
//         console.log(count);
//     }
//     let id = setTimeout(incres,4000);
//     console.log(id);

//     // clearTimeout(id);
// }

// {
//     function greet(name,lastName){
//         console.log('Hello' + ' ' + name + ' ' + lastName);
//     }

//     setTimeout(greet,7000,'M.S','Dhoni');
// }


/* ==Promise== */

// {
// const count = false;

// let countValue = new Promise(function (resolve, reject){
//     if (count) {
//         resolve('There is a count value');
//     }else{
//         reject('There is no count value');
//     }
// });
// // console.log(countValue);
// countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));
// }

// {
// let con = false;

// let countValue = new Promise(function(resolve, reject) {
//     if (con) {
//         resolve('there is count')
//     }else{
//         reject('there is no')
//     }
// });
// countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));
// }

// {
//     let countValue = new Promise(function(resolve, reject){
//         // resolve('resolved');
//         reject('rejected')
//     });

//     countValue
//     .then(function successValue(result){
//         console.log(result);
//     })

//     .then(function successfully(){
//         console.log('this way');
//     })

//     .then(()=>{
//         console.log("HELLO WORLD");
//     })

//     .catch((err)=>{
//         console.log(err);
//     })
//     .catch((err)=>{
//         console.log("error he ",err);
//     });
// }

// {
//     let countValue = new Promise((resolve, reject) => {
//         // reject('reje');
//         resolve('res');
//     });
//     countValue.then(
//         function successValue(result) {
//             console.log(result);
//         },
//     )
//     .catch(
//         function errorValue(result) {
//             console.log(result);
//         }
//     );
// }

// {
//     let countValue = new Promise(function (resolve, reject){
//         resolve('resol');
//         // reject('rej');
//     });
//     countValue
//     .then(result=>console.log(result))
//     .catch((err)=>console.log(err))
//     .finally(
//         function greet(){
//             console.log('execute');
//         }
//     );
// }

// {
//     function greet(n){
//         console.log("is: ",n);
//     }
//     function sum(a,b,myCallback){
//         let total = a + b;
//         myCallback(total);
//     }
//     sum(3,4,greet);
// }

/* ==async\await */

// {
//     async function f() {
//         console.log('call');
//         return Promise.resolve(1);
//     }
//     f();
// }

// {
//     async function f(){
//         // console.log('async');
//         return Promise.reject("reject");
//     }
//     f().then(function(result){
//         console.log(result);
//     }).catch((err)=>console.log(err));
// }

// {
//     let promise = new Promise(function (resolve,reject){
//         setTimeout(function(){
//             resolve("resolve")},4000);
//     });

//     async function asyncFunc(){
//         // let result = promise;
//         let result = await promise;

//         console.log(result);
//         console.log("Hello");
//     }
//     asyncFunc();
// }

// {
//     let promise1 = new Promise(function(resolve , reject){
//         setTimeout(function(){
//             resolve('1 resolved')
//         },2000);
//     });
//     let promise2 = new Promise(function(resolve , reject){
//         setTimeout(function(){
//             resolve('2 resolved')
//         },3000);
//     });
//     let promise3 = new Promise(function(resolve , reject){
//         setTimeout(function(){
//             resolve('3 resolved')
//         },4000);
//     });

//     async function asyncFunc(){
//         let result1 = await promise1;
//         console.log(result1);
//         let result2 = await promise2;
//         console.log(result2);
//         let result3 = await promise3;
//         console.log(result3);
//     }
//     asyncFunc();
// }



/* ==try...catch...finally== */

// {
//     const numerator = 100 , denominator = 20;
//     try {
//         console.log(numerator/denominator);
//         console.log(a);
//         console.log('hello');
//     } catch (error) {
//         console.log('error caught');        
//         console.log('error message : ' + error);        
//     }   
// }

// {
//     const numerator = 100 , denominator = 20;
//     try {
//         console.log(numerator/denominator);
//         console.log(a);
//     } catch (error) {
//         console.log('error caught');
//         console.log('error ' + error);
//     }
//     finally{
//         console.log('every time');
//     }
// }

// {
//     const number = 10;
//     try {
//         if (number < 50) {
//             console.log('Success');
//         }else{
//             throw new Error('The Number is low')
//         }
//         console.log('hello');
//     } catch (error) {
//         console.log('error');
//         console.log('error : ' + error);
//     }
// }



/* ==use strict== */

'use strict';
// {
//     console.log('some code');

//     // 'use strict';
//     x = 21;
//     console.log(x);

// }

// {
//     myVariable = 9;
//     console.log(myVariable);

//     function hello() {
//         // 'use strict';

//         let string = "hello";
//     }
//     hello();
// }

// {
//     function hello(p1,p1){console.log('hello');}
//     hello();
// }

// console.log(null==null);
// let a ;
// console.log(null);

// const myFalse = new Boolean(false); // initial value of 
// console.log(myFalse);
// const g = Boolean(myFalse); // initial value of true
// console.log(g);
// const myString = new String("Hello"); // string object
// console.log(myString);
// const s = Boolean(myString); // initial value of true

// let b ;
// b = 10*"s";
// console.log(b);
// console.log(NaN === NaN);

// let myArr = [
//     {
//         studenName: "jack",
//         studenClass: 6,
//         studenSection: "a"
//     },
//     {
//         studenName: "tom",
//         studenClass: 6,
//         studenSection: "a"
//     },
//     {
//         studenName: "dhaval",
//         studenClass: 'MERN-STACK',
//         studenSection: "APP_lab"
//     }
// ];
// let a = myArr[1];
// console.log(myArr[2], myArr[2]);
// console.log(myArr[0]);
// console.log(a);

//Adding add method into the Array Object using Array.prototype property
// let myArr = [1,2,3,4];

// Array.prototype.add = function() {
//     let result = 0;

//     for(let i = 0; i < this.length; i++) {
//     	result += this[i];
//     }
//     return result;
// }

// console.log(myArr.add());

// let a = [["BMW",100],["AUDI",200],["THAR",300]];
// console.log(a);

// let dd = new Date;
// // console.log(dd);
// console.log(dd.getTime());


// let a = prompt("Enter : ")

// let r = alph_str(a)
// console.log(r);


// function alph_str(string) {
//     return string.split('').sort().join('');
// }

// let a = prompt("enter")

// let r = alph_str(a)
// console.log(r);

// function alph_str(string) {
//     let w = string.split('');
//     let r = '';

//     for (let i = 0; i < w.length; i++) {
//         if (w[i].length > r.length) {
//             r = w[i];
//         }
//     }
//     return r;
// }
// let a = prompt("enter: ");
// let r = n(a);
// console.log("defvkjbh",r);

// function n(str){
//     let word = str.split(' ');
//     let result = ' ';
//     for(let i = 0 ; i < word.length; i++){
//         if (word[i].length > result.length) {
//             result = word[i]
//         }
//     }
//     return result;
// }

// let alph = prompt("Enter Alphabetic String: ");

// let r = longest_word(alph);
// console.log("Longest Word in This line is: ", r);

// function longest_word(str) {
//     let words = str.split(' ');
//     let result = '';

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > result.length) {
//             result = words[i];
//         }
//     }
//     return result;
// }

// let a = prompt("enter");
// let r = alph_str(a);

// console.log(r);
// function alph_str(string){
//     return string.split('').sort().join('');
// }



// let a = prompt("enter");
// let r = alph_str(a);
// console.log("word",r);

// function alph_str(params) {
//     let word = params.split('');
//     let result = '';

//     for(let i = 0 ; i < word.length ; i++ ){
//         if (word[i].length > result.length) {
//             result = word[i];
//         }
//     }
//     return result;
// }


// let num = Number(prompt("enter"));

// if(a(num)){
//     console.log('perfect');
// }else{
//     console.log("not");
// }

// function a(n) {
//     let s = 0;
//     for(let i = 0 ; i<= n/2; i++){
//         if (n % i == 0) {
//             s += i;
//         }
//     }
//     if (s == n) {
//         return 1;
//     } else {
//         return 0;        
//     }
// }

// const n = Number(prompt("entewr : "));
// if (a(n)) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// function a(n) {
//     let sum = 0;
//     for(let i = 0;i<=n/2;i++){
//         if (n%i==0) {
//             sum += i;
//         }
//     }
//     if (sum == n) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let num = Number(prompt("enter"));

// if (a(num)) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// function a(n){
//     let s = 0 ;
//     for(let i = 0 ;i <= n/2;i++){
//         if (n% i == 0) {
//             s += i;
//         }
//     }
//     if (s == n) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let num = Number(prompt("ENter"));

// let r = a(num);
// console.log(num);
// console.log(r);

// function a(n){
//     let s = 0 ;
//     while (n != 0) {
//         s = s * 10 + n%10;
//         n = Math.floor(n/10);
//     }
//     return s;
// }

// let num = Number(prompt("Enter : "));
// let r = nuM(num);
// console.log("ff",r);

// function nuM(n) {
//     let s = 0;
//     while (n!=0) {
//         s = s * 10 + n%10;
//         n = Math.floor(n/10);
//     }
//     return s;
// }

// let num = Number(prompt("ENtyer"));
// let r = a(num);

// console.log(num);
// console.log(r);
// function a(n) {
//     let s =0 ;
//     while (n!=0) {
//         s = s * 10 + n%10;
//         n =Math.floor(n/10);
//     }
//     return s;
// }


// let a = prompt("ENter");

// let r = upperCase(a);
// console.log(r);

// function upperCase(str) {
//     let word = str.split(' ');
//     let result = [];

//     for(let i = 0; i < word.length; i++){
//         let words = word[i];
//         let a = words.charAt(0).toUpperCase() + words.slice(1);
//         result.push(a);
//     }
//     return result.join('');
// }


// let pro = prompt("vnf: ");

// let r = ing(pro);
// console.log("scvf: ", r);

// function ing(str) {
//     let word = str.split(' ');
//     let result = [];

//     for (let i = 0; i < word.length; i++) {
//         let words = word[i];
//         let a = words.charAt(0).toUpperCase() + words.slice(1);
//         result.push(a);
//     }
//     return result.join(' ');
// }





// let alph = prompt("String : ");

// let r = upperCase(alph);
// console.log("string : ", r);

// function upperCase(str) {
//     let words = str.split(' ');
//     let result = [];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let a = word.charAt(0).toUpperCase() + word.slice(1);
//         result.push(a);
//     }
//     return result.join(' ');
// }

// let alph = prompt("String : ");

// let r = upperCase(alph);
// console.log("string : ", r);

// function upperCase(str) {
//     let words = str.split(' ');
//     let result = [];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let a = word.charAt(0).toUpperCase() + word.slice(1);
//         result.push(a);
//     }
//     return result.join(' ');
// }


// console.log(0.1 === 100);

// let alph = prompt("String:");
// let r = upperCase(alph);
// console.log("str",r);

// function upperCase(str){
//     let word = str.split(' ');
//     let result = [];
//     for(let i = 0; i < word.length; i++){
//         let words = word[i];
//         let a = words.charAt(0).toUpperCase() + words.slice(1);
//         result.push(a);
//     }
//     return result.join(' ');
// }



// let n = 24;
// let l = 0, r = 100, ans = n;
// console.log(ans);
// while(l <= r) {
//    let mid = Math.floor((l + r) / 2);
//    console.log(mid);
//    if(mid * mid <= n) {
//     console.log(mid);
//        ans = mid;
//        l = mid + 1;
//        console.log("a",ans);
//    }
//    else {
//        r = mid - 1;
//     //    console.log("r",r);
//    }
// }
// console.log(ans);

let a = [1, 2, 3, 4, 5, 6];
var left = 0, right = 5;
var found = false;
var target = 5;
while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (a[mid] == target) {
        found = true;
        break;
    }
    else if (a[mid] < target) {
        left = mid + 1;
    }
    else {
        right = mid - 1;
    }
}
if (found) {
    console.log("`sdfv`YES");
}
else {
    console.log("NO");
}




