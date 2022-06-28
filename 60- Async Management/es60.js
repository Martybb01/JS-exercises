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
    let person = persons.find((person) => person.id === personId);
    if (person) {
      resolve(person);
    } else {
      //reject(new Error("this is an error"));
      reject(`Id: ${personId} doesn't exist`);
    }
  });
}

function fetchJobById(jobId) {
  return new Promise((resolve, reject) => {
    let job = jobs.find((job) => job.id === jobId);
    if (job) {
      resolve(job);
    } else {
      // reject(new Error("this is an error"));
      reject(`Id: ${jobId} not found`);
    }
  });
}

// fetchPersonById(1)
//   .then((person) => console.log(person))
//   .catch((err) => console.log(err));

// fetchJobById(1)
//   .then((job) => console.log(job))
//   .catch((err) => console.log(err));

Promise.all([fetchPersonById(1), fetchJobById(1)])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
