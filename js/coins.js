let num = Number(prompt("Enter Ammount : "));

coin(num);

function coin(amunt) {
    let coins = [25,10,5,2,1];
    let numCoins = [0,0,0,0,0];

    for (let i = 0; i < 5; i++) {
        numCoins[i] = Math.floor(amunt / coins[i]);
        amunt = amunt % coins[i];
    }

    console.log("25 : ",numCoins[0]);
    console.log("10 : ",numCoins[1]);
    console.log("5  : ",numCoins[2]);
    console.log("2  : ",numCoins[3]);
    console.log("1  : ",numCoins[4]);
}

