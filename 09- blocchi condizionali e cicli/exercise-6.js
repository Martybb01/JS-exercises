const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

// METODO 1
function getKeys(obj) {
  for (let prop in obj) {
    console.log(prop);
  }
} // stampa le chiavi a elenco, una sotto l'altra

const keys = getKeys(person);
console.log(keys);

//METODO 2
function getKeys2(obj) {
  let objectPerson = [];
  for (let prop in obj) {
    objectPerson.push(prop);
  }
  return objectPerson;
} // stampa le chiavi in un nuovo array

const keys2 = getKeys2(person);
console.log(keys2);
