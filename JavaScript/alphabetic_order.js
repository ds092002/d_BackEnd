let alph = prompt("Enter Alphabetic String : ");

let r = alphabetic_string(alph);
console.log("Normal String : ",alph);
console.log("String Length Is: ",alph.length);
console.log("Soretd String : ",r);


function alphabetic_string(string) {
    return string.split('').sort().join('');
    // let array = string.split('').sort().join('');
    // array.sort();
    // return array.join('');
}
