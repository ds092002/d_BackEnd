let alph = prompt("Enter Alphabetic String: ");

let r = upperCase(alph);
console.log("First Letter Uppercase: ", r);

function upperCase(string) {
    let words = string.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(' ');
}