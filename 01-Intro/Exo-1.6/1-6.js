const readlineSync = require('readline-sync');
const number1 = parseInt(readlineSync.question("Enter the first integer: "));
const number2 = parseInt(readlineSync.question("Enter the second integer: "));
const remainder = number1 % number2;


console.log("The remainder of the division is: " + remainder);
