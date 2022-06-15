const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    if (persons.find((person) => person.id === id)) {
      resolve(persons.find((person) => person.id === id));
    } else {
      reject(new Error(`Person with id ${id} not found`));
    }
  });
}

const myPromise1 = fetchPersonById(1);
const myPromise2 = fetchPersonById(2);
const myPromise3 = fetchPersonById(3);
const myPromise4 = fetchPersonById(4);

myPromise1.then((person) => console.log(person));
myPromise2.then((person) => console.log(person));
myPromise3.then((person) => console.log(person));
myPromise4.then((person) => console.log(person)); // Error: Person with id 4 not found
