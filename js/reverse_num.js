let num = Number(prompt("Enter Number : "));

let r = a(num);
console.log("Currect Number : ",num);   
console.log("The Reverse Number is : ",r);

 function a(n) {
    let sum = 0 ;
    while (n!=0) {
        sum = sum * 10 + n%10;
        n = Math.floor(n / 10);
    }
    return sum;
}
