// Javascript setTimeout()

// The setTimeout() method executes a block of code after the specified time. The method exectes teh code only once.

// {
//     // setTimeout(function, millisecond);

//     // function - a function containing a block of code
//     // millisecond - the time after which the function is executed
// }

// The setTime() method return an IntervalID, which is a positive integer.

// Display a Text Oncr After 3 Second

// {
//     // Program to Display a Text using setTimeout method
//     // function greet(){
//     //     console.log('Hello World....');
//     // }
//     // greet();
//     // setTimeout(greet,3000);
//     // console.log('This Message is Shown First ');
//     // console.log('1 Today to much Rain...');

//     // The setTimeout() method calls the greet() function after 3000 millisecond (3 second).

//     // let x = setInterval(greet,3000);
//     // clearInterval(x);
// }

// The setTimeout() method returns the interval id.

// {
//     // program to display a text using
//     function greet(){
//         console.log('Hello World');
//     }

//     let intervalID = setTimeout(greet, 3000);
//     console.log('ID : ' + intervalID);
//     clearInterval(intervalID);
//     console.log('Clear Interval Function Stop TO setTimeout Function');
// }

// Display Time Every 3 Second

// {
//     // // program to display time every 3 seconds
//     // function showTime() {

//     //     // return new data and Time
//     //     let dateTime = new Date();

//     //     // return the current local time
//     //     let time = dateTime.toLocaleTimeString();

//     //     console.log(time);

//     //     // display the time after 3 seconds
//     //     setTimeout(showTime, 3000);
//     // }

//     // // calling the function
//     // showTime();
// }


// The above program displays the time every 3 second.

// The setTimeout() method calls the function only once after the time interval (here 3 second).

// JavaScript clearTimeout()

// As you have seen in the above example, the programe execute a block of code after the specified time interval . If you want to stop this function call, you can use the clearTimeout() method.

// The syntax of clearTimeout() method is
// {
//     // clearTimeout(intervalID);
// }

// use clearTImeout() Method

// {
//     // program to stop the setTimeout() Method.

//     let count = 0;

//     // function creation
//     function increaseCount(){

//         // increasing the count by 1
//         count += 1;
//         console.log(count);
//     }

//     let id = setTimeout(increaseCount, 3000);

//     clearTimeout
//     clearTimeout(id);
//     console.log('setTimeout is stopped.');
// }

// thr setTimeout() method is used to increase the value of count after 3 second . However, thr clearTimout() method stops ther function call of thr setTimeout() method. Hence, the count value is not increased.

// You generally use the clearTimeout() method when you need to cancle the setTimeout() method call befor it happens.

//  You also pass additional arguments to the setTimeout() method.

// {
// setTimeout(function, millisecond, parameter1, ....parameterN);
// }

// When you pass additional parameter to the setTimeout() mathod, these parameters (paramter1, parameter2, ....etc) will be passed to the specified function.

// {
//     // programe to display a name
//     function greet(name, lastName){
//         console.log('Hello' + ' ' + name + ' ' + lastName);
//     }

//     // passing argument to setTimeout
//     setTimeout(greet, 5000, 'M.S.', 'Dhoni');
// }

// two parameter John and Deo are passed to setTimeout() method .These Two parameter are the argument that will be passed to the function (here, greet() function) that is defined inside the setTimeout() method.

// JavaScript CallBack Function

// program With setTimeout()

// {
// program that show the dalay in execution

// function greet() {
//     console.log('Hello World');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet,3000);
// sayName('M.S.Dhoni')
// }

// JavaScript promise and promise chaining

// In JavaScript, a promise is a good wway to handle asynchronous opreation. It is used to find out if the asynchronous opreation is successfully completed or not.

// A promies may have one of three states.

// Pending
// Fulfilled
// Rejected
// A promises starts in a pending state. That means the process is not complete. if the operation is successfully, it will be in a fulfilled state. If an error occurs, The process ends in rejected states.

// Create a Promies.

// To creat a promise object , we use the Promises() constructor.
// {
//     let promise = new Promise(function(resolve, rejecte){
//         // do somthing
//     });

// The Promise() constructor takes a function as an argument. The function also accepts two function resolve() and reject().

// If the Promise returns successfully, the resolve() function is called. And , if an error occurs, the reject() function is called.
// }

// Program with a Promise

// {
//     const count = false;

//     let countValue = new Promise(function (resolve, reject){
//         if(count){
//             resolve('There Is a count value.');
//         }else{
//             reject("There is no count value.");
//         }
//     });

//     // console.log(countValue);

//     countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));
// }

// Javascript Promise Chaining

// Promise are useful when you have to handle more then one asynchrononus task, one after another. For that , we use promise chaining.

// You can perfrom an operation after a promise is resolved using method then(), catch() and finally().

// JavaScript then() method

// The then() method is used with the callback when the promise is successfully fulfiled or resolved.

// The syntax of then() method is

// {
//     promiseObject.then(onFulfilled, onRejectd);
// }

// Chaining the Promise with then()

// {
//     // return a promise

//     let coutValue = new Promise(function (resolve, reject) {
//         resolve("Promise Resolved");
//         // reject("Promise Reject");
//     });

//     // executes when promise is resolved successfully

//     coutValue
//     .then(function successValue(result){
//         console.log(result);
//     })

//     .then(function successValue(){
//         console.log('You can call multiple function this way.');
//     })
//     .then(()=>{
//         console.log('Hello Wolrd');
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// }

// JavaScript catch() method.

// The catch() method is used with the callbacks when the promise is rejected or if an error occues.

// {
//     // return a Promise
//     let countValue = new Promise(function (resolve, reject) {
//         reject("Promise Rejected");
//         // resolve("Promise Resolve");
//     });

//     // Executes when promise is resolved successfully
//     countValue.then(
//         function successValue(result) {
//             console.log(result);
//         },
//     )

//     // Executes if there is an error
//     .catch(
//         function errorValue(result) {
//             console.log(result);
//         }
//     );

// }

// JavaScript finally() method.

// {
//     // You can also use the finally() method with promise . The finally() method gets executed when the promise is either resolved successfully or rejected.

//     // return a Promise
//     let countValue = new Promise(function (resolve, reject){
//         // could be resolved or rejected
//         resolve('Promise Resolved');
//         // reject('Promise Rejectd');
//     });

//     // add other blocks of code
//     countValue
//     .then(result=>console.log(result))
//     .catch((err)=>console.log(err))
//     .finally(
//         function greet() {
//             console.log('This Code Is Executed');
//         }
//     );
// }





// {
//     // callback function

//     function greet(n){
//         console.log('Total Is : ',n);
//     }

//     function sum(a,b,myCallback){
//         let total = a + b;
//         myCallback(total);
//     }
//     sum(3,4,greet);
// }


// setTimeout, callback Function, Promise(resolve, reject) => always return callback function.
// fullFiled -> then method ,      rejected -> catch method