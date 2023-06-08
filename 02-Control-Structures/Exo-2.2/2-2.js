const readlineSync = require('readline-sync');

const minAge = parseInt(readlineSync.question("Enter the minimum age: "));
const maxAge = parseInt(readlineSync.question("Enter the maximum age: "));
const currentAge = parseInt(readlineSync.question("Enter the current age: "));


if (minAge > maxAge) {
  console.log("Error: The minimum age cannot be greater than the maximum age.");
  process.exit(1);
}


if (currentAge >= minAge && currentAge <= maxAge) {
  console.log("The current age is between the minimum and maximum age.");
} else {
  console.log("The current age is not between the minimum and maximum age.");
}
