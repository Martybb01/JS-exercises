// METODO 1
function sum1(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum1(1, 2, 3, 4, 5)); // 15

// METODO 2
function sum2(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(sum2(1, 2, 3, 4, 5, 20, 40, 55)); // 130
console.log(sum2(1, 2, 3, 4, 5)); // 15

// METODO 3
function sum3(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sum3(1, 2, 3, 4, 5, 20, 40, 55)); // 130
