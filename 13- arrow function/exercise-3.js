const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const log = (value) => {
  console.log(value);
};

// METODO 1

const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
log(result);

// METODO 2

const calculator = {
  result: 0,
  init(a) {
    this.result = Number(a);
    return this;
  },
  sum(a) {
    this.result += a;
    return this;
  },
  subtract(a) {
    this.result -= a;
    return this;
  },
  multiply(a, b) {
    this.result *= a;
    return this;
  },
  divide(a) {
    this.result /= a;
    return this;
  },
  getResult() {
    return Number(this.result);
  },
  printResult() {
    console.log(this.result);
    return this;
  },
};

//* ((2 + 4) * (5 + 2) - 2) / 5

// calculator
//   .init(calculator.init(2).sum(4).getResult())
//   .multiply(calculator.init(5).sum(2).getResult())
//   .subtract(2)
//   .divide(5)
//   .printResult();

calculator
  .multiply(
    calculator.init(2).sum(4).getResult(),
    calculator.init(5).sum(2).getResult()
  )
  .subtract(2)
  .divide(5)
  .printResult();
