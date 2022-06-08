class Person {
  firstName;
  lastName;
  age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fName() {
    return this.firstName;
  }
  set fName(fName) {
    return (this.firstName = fName);
  }
  get lName() {
    return this.lastName;
  }
  set lName(lName) {
    return (this.lastName = lName);
  }
  /**
   * @param {any} age
   */
  set age(age) {
    return (this.age = age);
  }
  get age() {
    return this.age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
