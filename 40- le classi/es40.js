class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fName() {
    return this.firstName;
  }
  set fName(name) {
    this.fName = name;
  }
  get lName() {
    return this.lastName;
  }
  set lName(name) {
    this.lName = name;
  }
  get myAge() {
    return this.age;
  }
  set myAge(value) {
    return (this.myAge = value);
  }
  get fullName() {
    return `${this.fName} ${this.lName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);
console.log(person.myAge); // 25

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
