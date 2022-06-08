const person = {
  firstName,
  lastName,
  fName,
  lName,
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
john.fName = "John";
john.lName = "Doe";

const simon = Object.create(person);
simon.fName = "Simon";
simon.lName = "Collins";

console.log(john.fullName());
console.log(simon.fullName());
