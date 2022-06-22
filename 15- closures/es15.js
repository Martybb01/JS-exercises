function pow(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const pow2 = pow(2);
const pow5 = pow(5);
const pow3 = pow(3);

console.log("--- Power of 2 ---");
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log("--- Power of 5 ---");
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));

console.log("--- Power of 3 ---");
console.log(pow3(3));
console.log(pow3(5));
console.log(pow3(10));
