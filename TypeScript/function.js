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
// enum gender{
//     'male','female','hello'
// }
// let x = gender.male;
// console.log(x);
// function Add(a,b) {
//     console.log(a + b);
// }
// Add(7,'D');    
// function Add(a:number,b:number,c:number) {
//     return a * b * c;
// };
// let a = Add(1,21,10);
// console.log(a);
// const person = function(a : number, b : string, c : number){
//     return a + b + c;
// };
// console.log(7, 'person' , 7);
// let skill = function() {
//     console.log("SkillQode - Decode youe skill");
// };
// skill();    
// let x = function(a : number, b : any):any
// {return a + b;};
// let z = x(7,'D');
// console.log(z);
// (function(a: number, b: number, c: number, d: number, e: number, f: number, g: number){
//     console.log("Value of  : ", a, b, c, d, e, f, g);
//     let x = "Hello ! I called my self";
//     console.log(x);
// })(1,2,3,4,5,6,7);
// const myFunction = new Function("a","b","return a + b");
// let x = myFunction(3,4);
// console.log(x);
// let x = (x : number,y : number) => x * y;
// console.log(x(7,1));
// function myFunction(x : number, y : number){
//     return x + y;
// };
// let text = myFunction(2,5);
// console.log(text);
// ================================================
// // function myFunction(x : number, y : number) {
// //     return x + y;
// // };
// // console.log(myFunction.toString(7,1));
// ================================================
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++)
        sum *= args[i];
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
