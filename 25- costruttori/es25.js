// Object prototype
const person = {
  firstName: this.firstName,
  lastName: this.lastName,

  get fName() {
    return this.firstName;
  },
  /**
   * @param {any} fName
   */
  set fName(fName) {
    return (this.firstName = fName);
  },
  get lName() {
    return this.lastName;
  },
  /**
   * @param {any} lName
   */
  set lName(lName) {
    return (this.lastName = lName);
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";

const simon = Object.create(person);
simon.firstName = "Simon";
simon.lastname = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
