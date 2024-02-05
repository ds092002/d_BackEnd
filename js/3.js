/* ============  If - Else ============ */


/* 1 = Find Smallest */
// let a = Number(prompt("Enter a : "));
// let b = Number(prompt("Enter b : "));

//     console.log("Value of A is : "+a);
//     console.log("Value of B is : "+b);

// if (a > b) {
//     console.log("A is Big");
// }
// else{
//     console.log("A is Small");
// }


/* 2 = Positive Or Negitive*/

// let a = Number(prompt("Enter a : "));
// console.log("A value is : "+a);

// if (0 < a) {
//     console.log("A is Positive ");
// }
// else{
//     console.log("A is Negative ");
// }

/* 3 = Divisible By 5*/

// let n = Number(prompt("Enter n : "));
// console.log("Enter Value : "+n);

// if (n%5==0) {
//     console.log("Its Divisible By 5");
// }
// else{
//     console.log("Its Not Divisible By 5");
// }

/* 4 = Divisible By 5 Or 3*/

// let n = Number(prompt("Enter n : "));
// console.log("Enter Value : "+n);

// if (n%5==0) {
//     console.log("Its Divisible By 5 ");
// }
// else{
//     console.log("Its Not Divisible By 5 ");
// }
// if (n%3==0) {
//     console.log("Its Divisible By 3 ");
// }
// else{
//     console.log("Its Not Divisible By 3 ");
// }

/* 5 = Students Marks */

// let a = Number(prompt("Enter Maths : "));
// let b = Number(prompt("Enter Science : "));
// let c = Number(prompt("Enter English : "));

// console.log("Maths Marks : "+a);
// console.log("Science Marks : "+b);
// console.log("English Marks : "+c);

// let marks = a + b + c;
// let per = marks / 3;

// console.log("Obtain Marks :"+marks);
// console.log("Perchantage : "+per);

// if (marks > 33) {
//     console.log("Student Pass");
// }
// else {
//     console.log("Student Not Pass");
// }

/* 6 = leap year */

// let a = Number(prompt("Enter a : "));
// console.log("Enter  value : "+a);

// if (a%4==0) {
//     console.log("Leap Year");
// }
// else{
//     console.log("Not Leap Year");
// }

/* 7 = a,b,c Largest Among */

// let a = Number(prompt("Enter a : "));
// let b = Number(prompt("Enter b : "));
// let c = Number(prompt("Enter c : "));

// console.log("Value of a is : "+a);
// console.log("Value of b is : "+b);
// console.log("Value of c is : "+c);

// if (a > b && a > c) {
//     console.log("A is Big");
// }
// else if(!(b < c)){
//     console.log("B is Big");
// }
// else{
//     console.log("C is Big");
// }

/* 8 = Electricity */

// let total ;
// let unit = Number(prompt("Enter Unit : "));

// console.log("Unit Is : "+unit);

// if (unit >= 0 && unit <= 100) {
//     total = unit * 0.9 + 50 ;
// }
// else if (unit > 100 && unit <= 300) {
//     total = 60 + (unit - 100) * 0.8 + 50 ;
// }
// else if (unit > 300) {
//     total = 160 + (unit - 300) * 0.9 + 50 ;
// }

// if (unit > 300) {
//     total = total + total * 0.15;
//     console.log("Total is : ",total);
// }
// else{
//     console.log("Total Is : ",total);
// }

/* 9 = Voting */

// let age = Number(prompt("Enter Age : "));
// console.log("Age Is : "+age);

// if(age >= 18){
//     console.log("Eligible For Vote");
// }
// else{
//     console.log("Not Eligible For Vote");
// }

/* 10 = Salary Slab */

// let basic = Number(prompt("Enter Basic : "));
// console.log("Basic Is : ",+basic);

// let gross;
// let hra;
// let da;

// if (basic <= 5000) {
//     hra = basic * 0.08;
//     da = basic * 0.20;
// }
// else if (basic <= 10000) {
//     hra = basic * 0.12;
//     da = basic * 0.30;
// }
// else if (basic <= 15000) {
//     hra = basic * 0.15;
//     da = basic * 0.40;
// }
// else {
//     hra = basic * 0.20;
//     da = basic * 0.50;
// }

// gross = basic + hra + da;

// console.log("HRA : ",hra);
// console.log("DA : ",da);
// console.log("Gross : ",gross);

/* 11 = Income Tax Slab */

// let income = Number(prompt("Enter Income : "));
// console.log("Income Is : ",+income);

// let tax;

// if (income >= 0 && income <= 2500) {
//     tax = 0.0;
// }
// else if(income >= 2500 && income <= 5000){
//     tax = 0 + (income - 2500) * 0.10;
// }
// else if(income >= 5000 && income <= 10000){
//     tax = 250 + (income - 5000) * 0.20;
// }
// else if(income >= 10000){
//     tax = 1250 + (income - 10000) * 0.30;
// }

// console.log("Total Tax Is : ",tax);

/* 12 = Students Marks */

// let a = Number(prompt("Enter Maths : "));
// let b = Number(prompt("Enter Science : "));
// let c = Number(prompt("Enter English : "));

// console.log("Maths Marks : "+a);
// console.log("Science Marks : "+b);
// console.log("English Marks : "+c);

// let marks = a + b + c;
// let per = marks / 3;

// console.log("Obtain Marks :"+marks);
// console.log("Perchantage : "+per);

// if (marks > 75) {
//     console.log("Grad A");
// }
// else if(marks<=75 && marks>=60){
//     console.log("Grad B");
// }
// else if(marks<=60 && marks>=45){
//     console.log("Grad C");
// }
// else if(marks<=45 && marks>=35){
//     console.log("Grad D");
// }
// else{
//     console.log("Fail");
// }

/* 13 = Assign Value */

// let x = Number(prompt("Enter X : "));
// let y = Number(prompt("Enter Y : "));

// if (x < 2000 || x > 3000) {
//     console.log("Value Of X is : "+x);
// }
// if (100 < y && y < 500) {
//     console.log("Value Of Y is : "+y);
// }

//    =====================================================================================================   // 


/* ============  Loop  ============ */


/* 
    continue statement -> for , while , do-while
                       -> continue , break
    for in , for of (array , object) -> forEach
*/

// let x = Number(prompt("Enter x : "));
// for (let i = 1; i <= x; i++){
//         console.log(i);
// }
// let x = Number(prompt("Enter x : "));
// let txt = " ";
// for (let i = 1; i <= x; i++){
//     txt = txt + i + " , ";
// }
// console.log(txt);
    
/*   10 - 1 */    
    
// for (let i = 10; i >= 1; i--){
//         console.log(i);
// }


/*   51 - 99 */

// let txt = " ";
// for (let i = 51 ; i <= 99 ; i++){
//     txt = txt + i + " ";
// }
// console.log(txt);
    
    
/*  1 -  n  */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//         txt = txt + i + " ";
//      }
//     console.log(txt);


/*  n -  1  */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = n; i >= 1; i--){
//         txt = txt + i + " ";
//      }
//     console.log(txt);


/*    -n   -   n   */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = -n; i <= n; i++){
//         txt = txt + i + " ";
//      }
//     console.log(txt);


/*    odd  -   n   */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//         if(i%2==0) {
//             txt = txt + i + " ";
//         }
//      }
//     console.log(txt);


/*    even  -   n   */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//         if(i%2!=0) {
//             txt = txt + i + " ";
//         }
//      }
//     console.log(txt);


/*  1 , 4 , 9 , 16 */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++) {
//             txt = txt + (i * i) + " ";
//         }
//      console.log(txt);


/*    1 , 4 , 3 , 16 , 5 */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//        if(i%2==0){
//             txt = txt + (i * i) + " ";
//         }else{
//             txt = txt + i + " ";
//         }
//      }
//      console.log(txt);


/*   1 , 2 , 4 , 8 , 16  */

// let n = Number(prompt("Enter n : "));
// let txt = " ";
//  for (let i = 1; i <= n; i*=2){
//         txt = txt + i + " ";
//      }
//      console.log(txt);


/* 1 , 4 , 12 , 32 , 80   */

// let n = Number(prompt("Enter n : "));
// let a = 1;
// let txt = " ";
//  for (let i = 1; i <= n; i++){
//          txt = txt + (a * i) + " ";
//          a *= 2;
//      }
//      console.log(txt);

/* Total 1, 2 , 3 ......, 10 = 55 */

// let sum = 0;
// let txt = " ";
//  for (let i = 1; i <= 10; i++){
//      sum += i;      
//         {
//             txt =  sum + " ";
//         }
//      }
//      console.log("Sum is : ",txt);
     
     
 /* Total Odd 1 , 3 , 5 */     
     
// let sum = 0;
// let txt = " ";
//  for (let i = 1; i <= 6; i+=2){
//      sum += i;      
//         {
//             console.log(i);
//             txt =  sum + " ";
//         }
//      }
//      console.log("Odd Sum Total is : ",txt);


 /* Total Even 2 , 4 , 6 */     
     
// let sum = 0;
// let txt = " ";
//  for (let i = 2; i <= 6; i+=2){
//      sum += i;      
//         {
//             console.log(i);
//             txt =  sum + " ";
//         }
//      }
//      console.log("Even Sum Total is : ",txt);


/* ======================================================== */

// Continue and Break Statment

// let x = Number(prompt("Enter X : "));
// for (let i = 1; i <= x; i++) {
    //             // if (i==3)
    //              if(i==3||i==7){
    //                 // break;
    //                 continue;
    //             }
    //             console.log(i);
    //        }
        

/* ======================================================== */

// do - while

// let i = 1;
// let x = Number(prompt("Enter X : "));
// do{
//     console.log(i++);
// }while (i<=x);