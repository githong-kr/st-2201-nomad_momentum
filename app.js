const calculator = {
  add: (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  },
  minus: (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
  },
  divide: (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
  },
  powerOf: (firstNumber, secondNumber) => {
    return firstNumber ** secondNumber;
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.minus(2, 3));
console.log(calculator.divide(2, 3));
console.log(calculator.powerOf(2, 3));
