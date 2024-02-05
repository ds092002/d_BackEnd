// let data = "777";
// console.log(data);
// console.log(Number(data));

// let data = 777.968652714487;
// console.log(data);                              // 777.968652714487 (string)
// console.log(data.toString());                   // 777.968652714487
// console.log((700 + 77).toString());             // 777

// console.log(data.toExponential());                      // 7.77968652714487e+2
// console.log(data.toExponential(8));                     // 7.77968653e+2
// console.log(data.toExponential(6));                     // 7.779687e+2
// console.log(data.toExponential(4));                     // 7.7797e+2
// console.log(data.toExponential(2));                     // 7.78e+2

// console.log(data.toFixed());                        // 778
// console.log(data.toFixed(6));                       // 777.968653
// console.log(data.toFixed(4));                       // 777.9687
// console.log(data.toFixed(2));                       // 777.97

// console.log(data.toPrecision());                   // 777.968652714487
// console.log(data.toPrecision(2));                  // 7.8e+2
// console.log(data.toPrecision(4));                  // 778.0
// console.log(data.toPrecision(6));                  // 777.969
// console.log(data.toPrecision(8));                  // 777.96865              

// console.log(data.valueOf());                     // 777.968652714487 
// console.log((6+77).valueOf());                   // 83

// console.log(Number(true));                       // 1
// console.log(Number(false));                      // 0
// console.log(Number("10"));                       // 10
// console.log(Number("  10"));                     // 10
// console.log(Number("10  "));                     // 10
// console.log(Number(" 10 "));                     // 10
// console.log(Number("10.77"));                    // 10.77
// console.log(Number("10,77"));                    // NaN
// console.log(Number("10 77"));                    // NaN
// console.log(Number("D"));                        // NaN

// console.log(parseInt("-20"));                    // -20
// console.log(parseInt("-20.33"));                 // -20
// console.log(parseInt("10"));                     // 10
// console.log(parseInt("10.33"));                  // 10
// console.log(parseInt("70 80 90"));               // 70 
// console.log(parseInt("50 Years"));               // 50
// console.log(parseInt("Years 60"));               // NaN

// console.log(parseFloat("10"));                   // 10
// console.log(parseFloat("10.77"));                // 10.77
// console.log(parseFloat("70 80 90"));             // 70
// console.log(parseFloat("50 Year"));              // 50
// console.log(parseFloat("Year 20"));              // NaN

// console.log(Number.isInteger(10));               // true
// console.log(Number.isInteger(20.7));             // flase

// console.log(Number.isSafeInteger(12));                 // true
// console.log(Number.isSafeInteger(126498471055409540)); // false

// console.log(Number.parseFloat("10"));            // 10
// console.log(Number.parseFloat("10.77"));         // 10.77
// console.log(Number.parseFloat("70 80 90"));      // 70
// console.log(Number.parseFloat("45 Year"));       // 45
// console.log(Number.parseFloat("Year 56"));       // NaN

console.log(Number.parseInt("-30"));                // -30
console.log(Number.parseInt("-30.60"));             // -30
console.log(Number.parseInt("40"));                 // 40
console.log(Number.parseInt("-40"));                // -40
console.log(Number.parseInt("20 70"));              // 20
console.log(Number.parseInt("100 year"));           // 100
console.log(Number.parseInt("Year 100"));           // NaN