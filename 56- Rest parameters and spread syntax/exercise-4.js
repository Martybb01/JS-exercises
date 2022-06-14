function sum(...num) {
  return num.reduce((a, b) => a + b, 0);
}
// sum = (...num) => num.reduce((a, b) => a + b, 0); --> arrow function

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

const numbers2 = [1, 2, 3, 4, 5];
console.log(sum(...numbers2)); // 15
