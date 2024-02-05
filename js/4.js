/*======= Map Method =======*/

// let data = new Map([["BMW",100] , ["Audi",200]  , ["Toyoto",300]]);


// data.set("Thar",400);
// data.set("Mustang",500);

// console.log(data);
// console.log(null <= 0);
// console.log(data.size);
// data.clear();
// data.delete("BMW");
// console.log(data.entries());
// console.log(data.get("Thar"));
// console.log(data.has("Toyoto"));
// console.log(data.keys());
// console.log(data.values());

// let txt = "";
// data.forEach ((val , str) => {
//     txt = txt + str + " => " + val + "\n";
// });

// console.log(txt);


/*======= Set Method =======*/

let arr = new Set(["BMW" , "Thar" , "Audi"]);

arr.add(10);
arr.add(100);

console.log(arr);

// console.log(arr.size);
// arr.delete("BMW");
// console.log(arr.has("thar"));
// arr.clear();
// arr.keys();
// console.log(arr.keys());
// console.log(arr.values());
// console.log(arr.entries());

let txt = "";
arr.forEach ((str) => {
    txt = txt + str + "\n";
});

console.log(txt);