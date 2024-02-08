let input = document.getElementById('input');
let vowelC = document.getElementById('vowel');

function vowelCounter() {
    arr = input.value;
    let counter = 0;
    let vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    for (let i in arr) {
        if (vowel.includes(arr[i])) {
            counter++;
        }
    }
    vowelC.innerHTML = counter;
}

function clearInput() {
    document.getElementById("input").value = "";
}