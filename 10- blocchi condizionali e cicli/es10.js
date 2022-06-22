function sumUntil(maxValue) {
  let sum = 0;
  for (let counter = 1; counter <= maxValue; counter++) {
    sum += counter;
  }
  return sum;
}

console.log(sumUntil(5));
console.log(sum(5));
