let input = document.getElementById('input');
let counterButton = document.getElementById('count-button');
let strLength =  document.getElementById('strLength');

function lengthCounter(){
    let length = input.value.length;
    strLength.innerHTML = length;
}
function clearText() {
    document.getElementById("input").value = "";
    document.getElementById("strLength").innerHTML = "Word Length : ";
  }
  
