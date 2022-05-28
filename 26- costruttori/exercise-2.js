function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName} `;
    // return this.fullName + " " + this.lastName;
  };
}

let person = new Person("John", "Doe");
let anotherPerson = new Person("Simon", "Doe");

console.log(person.fullName());
console.log(anotherPerson.fullName());
