const readlineSync = require('readline-sync');

let favoriteNumber;

do{
    favoriteNumber = parseInt(readlineSync.question("What is your favorite number ? => "));
    if(favoriteNumber !== 42)
        console.log("Are youSure ?")
} while (favoriteNumber !== 42);

console.log("Great choice! 42 is an awesome number!");