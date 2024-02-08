// function Add(a : number, b :  string) : any
// {
//     return a + b;
// }
// // console.log(Add(2,5));
// console.log(Add(2,'5'));
// interface hello {
//     name ?: string
//     age ?: number
//     email ?: string
// }
// let person : hello = {
//     name: "John",
//     age: 30,
//     // job: "Developer"
// };
// console.log(person);
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["hello"] = 2] = "hello";
})(gender || (gender = {}));
var x = gender.male;
console.log(x);
