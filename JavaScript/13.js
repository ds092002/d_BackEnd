// object 

// let person = {
//     age : 21,
//     greet : function(){
//         return ("Hello Good Mroning");
//     }
// };

// person.name = "Skill";
// person.nationaltiy = "Indian";
// console.log(person);
// console.log(person.age);
// console.log(person.greet());

// delete person.age;
// console.log(person);

// object access property

// console.log(person.name);
// console.log(person["greet"]());

// let person = {
//     name : "Krish",
//     age : 20,
//     marks :{
//         maths : 33,
//         sci : 35,
//         eng : 47
//     },
//     hobbies : ["Reading","Dancing","Photograpy"]
// };

// console.log(person);
// console.log(person.marks);
// console.log(person.marks.maths);
// console.log(person.hobbies[0]);




// class Person{
//     constructor(name,city){
//         this.name = name;
//         this.city = city;
//     }greet(){
//         return ("Hello " + this.name +"\nLives in : " + this.city);
//     }
// }

// let krish = new Person("KRISH","Surat");
// console.log(krish.greet());


// Template Literal
let a = 25,b = 50;
// let data = "Hello Good Mornig Guys";
let data = `Hello Good Mornig Guys
${a*b} ${b}`;
console.log(data);
