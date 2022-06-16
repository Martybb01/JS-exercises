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

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((person) => person.id === id);
      if (person) {
        return resolve(person);
      }
      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        return resolve(job);
      }
      return reject(`Job with id: ${id} doesn't exist`);
    });
  });
}

// STAMPA L'OGGETTO
Promise.all([fetchPersonById(2), fetchJobById(2)])
  .then(([person, job]) => {
    console.log(person);
    console.log(job);
  })
  .catch((err) => {
    console.error(err);
  });

// STAMPA LA STRINGA
Promise.all([fetchPersonById(1), fetchJobById(1)]).then((values) => {
  const job = values.find((value) => value.jobTitle);
  const person = values.find((value) => value.firstName);
  console.log(`${person.firstName} ${person.lastName} is a ${job.jobTitle}`);
});
