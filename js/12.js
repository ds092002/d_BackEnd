// let data = [11,22,33,44,55,66,77,88];

/*======| Max & Min |========*/
// MaxNum = (a) =>{
//     return Math.max.apply(null,a)
// };
// console.log(MaxNum(data));
// MinNum = (a) =>{
//     return Math.min.apply(null,a)
// };
// console.log(MaxNum(data));
// console.log(MinNum(data));
        

/*======| forEach => convert array into string |========*/
// let a = "";
// data.forEach((val, index)=>{
//     a = a + " " + val;
// })
// console.log(a);

/*======| Map |========*/
// let a = [];
// a = data.map((val, index)=>{
//     return val * 6;
// })
// console.log(a);

/*======| Filter |========*/
// let a = [];
// a = data.filter((val, index)=>{
//     return val >= 33;
// })
// console.log(a);

/*======| Reduce |========*/
// let abc;
// abc = data.reduce((a,val, index)=>{
//     return a + val;
// })
// console.log(abc);
/*======| Reduce Right |========*/
// let abc;
// abc = data.reduceRight((a,val, index)=>{
//     return a + val;
// })
// console.log(abc);

/*======| Some |========*/
// let abc;
// abc = data.some((val, index)=>{
//     return val < 25;
// })
// console.log(abc);
        
/*======| Every |========*/
// let abc;
// abc = data.every((val, index)=>{
//     return val >= 25;
// })
// console.log(abc);

/*======| Find |========*/
// let abc;
// abc = data.find((val, index)=>{
//     return val <= 25;
// })
// console.log(abc);

/*======| FindIndex |========*/
// let abc;
// abc = data.findIndex((val, index)=>{
//     return val >= 25;
// })
// console.log(abc);

/*======| Entries |========*/
// let abc;
// abc = data.entries();
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);
// console.log(abc.next().value);


/*======| Changing Element |========*/

// data[5] = 99;
// console.log(data);


/*======| Concat (Merging Array) |========*/
// const data = ["M","S"];
// const a = ["Dhoni"];
// const b = data.concat(a);

// console.log(b);

/*======| Include |========*/

// let data = [11,22,33,44,55,66,77,88];
// abc = data.includes(11);
// console.log(abc);

/*======| CopyWithin |========*/

// let data = [11,22,33,44,55,66,77,88];
// console.log(data.copyWithin(0,4,7));
// console.log(data.copyWithin(0,7));
// console.log(data.copyWithin(3,4,6));