const readlineSync = require('readline-sync');
const number1 = parseFloat(readlineSync.question("Enter the first number with decimal part: "));
const integerPart = Math.floor(number1);
const number2 = parseFloat(readlineSync.question("Enter the second number with decimal part: "));
const result = integerPart * number2;


console.log("The result of the multiplication is: " + result);
