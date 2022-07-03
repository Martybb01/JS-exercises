function sum(...nums) {
  return nums.reduce((num, acc) => num + acc, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
