// for in loop and for of loop


/* =====|for in loop|===== */

// let person = {
    //     name : "Dhaval",
    //     age : 21,
    //     email : "dhavalas2002@gmail.com"
    // };
    
    // let person = [11,22,33,44,55,66,77];
    // let person = 'JAVASCRIPT';
    
    // let txt ="";
    // for(let i in person){
    //     txt += person[i] + "\n";
    // }
    
    // console.log(txt);

    

/* =====|for of loop|===== */


// let person = [11,22,33,44,55,66]

// let txt = "";

// for(let i of person){
//     txt += i + "\t";
// }

// console.log(txt);



/*====|  rest parametr / spread operator |==== */

let person = {
        name : "Dhaval",
        age : 21,
        email : "dhavalas2002@gmail.com"
    };

let data = person;

person.salary = 1500;

data.hobbies = ["Music","Dancing","Cricket"];

console.log(person);
console.log(data);

