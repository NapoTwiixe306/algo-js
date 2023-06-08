const readlineSync = require('readline-sync')

let userName = readlineSync.question("What's your firstname ? ");
let name = readlineSync.question("What's your name ? ");
let city = readlineSync.question("What's your city ? ");
console.log("Your name is " + userName +  name + " and you live in " + city );