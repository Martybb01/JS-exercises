const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};
// stampa le chiavi in elenco
function getKeys(obj) {
  for (let key in obj) {
    console.log(`${key}`);
  }
}

const keys = getKeys(person);
console.log(keys);

// stampa le chiavi in array
function getArrayKeys(obj) {
  return Object.keys(obj);
}
console.log(getArrayKeys(person));
