let num1 = 10;
let num2 = 20;
console.log("Before swap: ", num1, num2); // Before swap: 10 20

// variable swapping using destructuring assignment
// we can create a temprary array of two variables and destructure it immediately in swapped order
[num1, num2] = [num2, num1];

console.log("After swap: ", num1, num2); // After swap: 20 10
