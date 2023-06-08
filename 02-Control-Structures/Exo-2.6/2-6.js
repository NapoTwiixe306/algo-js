const readlineSync = require ('readline-sync');

const number = parseInt(readlineSync.question("Enter a number between 1 and 7 => "));

let dayOfWeek;

switch (number){
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
        break;
    case 7:
        dayOfWeek = "Sunday";
        break;
    default:
        console.log("Invalid Number, please enter a number between 1 and 7");
        // process.exit(1);
}

console.log("The corresponding day of the week is: " + dayOfWeek);