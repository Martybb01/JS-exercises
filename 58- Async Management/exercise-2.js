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

// function fetchPersonById(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (persons.find((person) => person.id === id)) {
//         resolve(persons.find((person) => person.id === id));
//       } else {
//         reject(new Error(`Person with id ${id} not found`));
//       }
//     });
//   });
// }

// METODO CON OPERATORE TERNARIO
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      persons.find((person) => person.id === id)
        ? resolve(persons.find((person) => person.id === id))
        : reject(new Error(`Person with id ${id} not found`))
    );
  });
}

fetchPersonById(2).then((person) => console.log(person));
fetchPersonById(4).then((person) => console.log(person)); // Error: Person with id 4 not found
