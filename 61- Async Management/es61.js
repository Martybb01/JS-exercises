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

function fetchPersonById(personId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = persons.find((person) => person.id === personId);
      if (person) {
        resolve(person);
      } else {
        reject(new Error(`Person with id ${personId} not found`));
      }
    }, 1000);
  });
}

function fetchJobById(jobId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let job = jobs.find((job) => job.id === jobId);
      if (job) {
        resolve(job);
      } else {
        reject(new Error(`Job with id ${jobId} not found`));
      }
    }, 500);
  });
}

Promise.race([fetchPersonById(2), fetchJobById(4)])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
