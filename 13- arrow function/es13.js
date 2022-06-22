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

// `((2 + 4) * (5 + 2) - 2) / 5` = 8

const result = divide(subtract(multiply(sum(5, 2), sum(2, 4)), 2), 5);
log(result);
