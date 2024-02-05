// JavaScript try...catch...finally Statement

// The try, catch and finally blocks are used to handle exception (a type of an error).

// Type of Errors

// Syntax Error: Error in the syntax. For example, if you write console.log('your result');, the above program throws a syntax error. The spelling of console is a mistak in the above Code.

// Runtime Error: This type of error occurs dunring the execution of the program. For example,
// calling an invalid function or a variable.

// JavaScript try...catch Statment

// {
//     // The try...catch Statement is used to handle the exception.
//     try{
//         body of try
//     }
//     catch(error){
//         body of catch
//     }

//     // The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.
// }

// Display Undeclared Variable

// {
//     // program to show try...catch in a program

//     const numerator = 100, denominator = 20;
//     try {
//         console.log(numerator/denominator);

//         // forgot to define variable
//         console.log(a);
//         console.log('Hellooo');
//     }
//     catch (error) {
//         console.log('An error caught');
//         console.log('Error Message : ' + error);
//     }
// }

// JavaScript try...catch...finally Statement

// You can also use the try...catch...finally statment to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.

// {
//     try{
//         try_statments
//     }
//     catch(error){
//         ctach_statments
//     }
//     finally(){
//         code that gets executed anyway
//     }
// }

// try...catch...finally Example

// {
//     const numerator = 100, denominator = 20;

//     try {
//         console.log(numerator/denominator);
//         console.log(a);
//     } 
//     catch (error) {
//         console.log('An error caught');
//         console.log("Error Message : " + error);    
//     }
//     finally{
//         console.log('Finally will execute every time');
//     }

//     // You need to use catch finally statement after try statement. Otherwise, the program will throw an error Uncught SyntaxError : Missing catch or finally after try. 
// }

// JavaScript throw Statement 

// The syntax of throw statement is

// {
//     throw expression;
// }

// {
//     const number = 5;
//     throw number/0;  // generate an exception when divided by 0
// }

// JavaScript throw with try...catch

// {
//     try{
//         body of try
//         throw expression;
//     }
//     catch(error){
//         body catch
//     }
// }

// try...catch...throw Example

{
    const number = 10;
    try {
        if (number > 50) {
            console.log('Success');
        }
        else{
            // user-defined throw statement
            throw new Error('The Number is low');
            // throw new Error();
        }

        // if throw executes, the below code does not executes
        console.log('Hello');
    } 
    catch (error) {
        console.log('An Error caught');    
        console.log('Error Message : ' + error);    
    }
}