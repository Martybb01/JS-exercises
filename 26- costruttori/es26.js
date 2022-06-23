// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function () {
//       return `${this.firstName} ${this.lastName}`;
//     };
//   }
// }
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
let john = new Person("john", "doe");
let simon = new Person("simon", "collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
