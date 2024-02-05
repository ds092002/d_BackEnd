let num = Number(prompt("Enter Number : "));

if (a(num)) {
    console.log(num," Is Perfect Number  ");
}else{
    console.log(num,"Is Not Perfect Number  ");
}

function a(n) {
    let sum = 0;
    for (let i = 0; i <= n/2 ; i++) {
        if (n % i==0) {
            sum += i;
        }
    }
    if (sum == n) {
        return 1;
    }else{
        return 0;
    }
}