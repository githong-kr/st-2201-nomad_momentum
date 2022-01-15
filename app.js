const calculator = {
  add: (firstNumber, secondNumber) => {
    console.log(firstNumber + secondNumber);
  },
  minus: (firstNumber, secondNumber) => {
    console.log(firstNumber - secondNumber);
  },
  divide: (firstNumber, secondNumber) => {
    console.log(firstNumber / secondNumber);
  },
  powerOf: (firstNumber, secondNumber) => {
    console.log(firstNumber ** secondNumber);
  },
};

calculator.add(2, 3);
calculator.minus(2, 3);
calculator.divide(2, 3);
calculator.powerOf(2, 3);
