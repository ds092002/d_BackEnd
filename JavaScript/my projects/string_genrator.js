let output = document.getElementById('output');

function stringGenerator(alpha) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str = '';

    for (let i = 1; i <= alpha; i++) {
        str += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    output.innerHTML = str;
}
