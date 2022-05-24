function getKeys(obj) {
  for (let prop in obj) {
    console.log(`${prop}`);
  }
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
