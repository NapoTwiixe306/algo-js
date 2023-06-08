for (let number = 1; number <= 100; number++) {
    // Check if the number is even
    if (number % 2 === 0) {
      const divisionResult = number / 2;
      console.log(number + " divided by 2 is " + divisionResult);
    } else {
      const multiplicationResult = number * 3;
      console.log(number + " multiplied by 3 is " + multiplicationResult);
    }
  }