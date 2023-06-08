const readlineSync = require('readline-sync');
const age = parseInt(readlineSync.question("Enter your age: "));

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not yet an adult.");
}
