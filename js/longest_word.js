let alph = prompt("Enter Alphabetic String: ");

let r = longest_word(alph);
console.log("Longest Word in This line is: ", r);

function longest_word(str) {
    let words = str.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > result.length) {
            result = words[i];
        }
    }
    return result;
}
