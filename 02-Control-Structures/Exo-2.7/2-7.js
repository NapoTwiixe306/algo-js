const readlineSync = require ('readline-sync');

const n = parseInt(readlineSync.question("Enter a number => "));
let sum = 0;

for (let i = 0; i < n; i++) {
    const number = parseInt(readlineSync.question("Enter a few number => "));
    sum += number;
}

console.log("The sum of the numbers is => " + sum)