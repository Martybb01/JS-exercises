const person = {
  get fName() {
    return this.firstName;
  },
  set fName(fName) {
    return (this.firstName = fName);
  },
  get lName() {
    return this.lastName;
  },
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
