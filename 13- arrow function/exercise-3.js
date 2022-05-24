// METODO 1
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

const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
log(result);

// METODO 2
let calculatore = {
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

calculatore
  .multiply(
    calculatore.init(2).sum(4).getResult(),
    calculatore.init(5).sum(2).getResult()
  )
  .subtract(2)
  .divide(5)
  .printResult();

// METODO 3 (consigliato da usare!)
const calculator = (initialValue) => {
  return {
    result: initialValue,
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
    multiply(a) {
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
};

calculator(calculator(2).sum(4).getResult())
  .multiply(calculator(5).sum(2).getResult())
  .subtract(2)
  .divide(5)
  .printResult();
