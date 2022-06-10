class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, "Mario", "Rossi", 25);
// Print developer as json object
const developer1 = JSON.parse(JSON.stringify(developer));
console.log(developer1);

// print developer as json string
const developer2 = JSON.stringify(developer);
console.log(developer2);
