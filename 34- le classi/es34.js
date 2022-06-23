// Class definition
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() {
    console.log(this.firstName, this.lastName);
  }
}
const developer = new Person("Mario", "Rossi");
console.log(`${developer.firstName} ${developer.lastName}`);
developer.sayHi();
