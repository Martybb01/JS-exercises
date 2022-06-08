const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: true,
      },
    ],
  },
];

function uncompletedNotes(notes) {
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes[i].todos.length; j++) {
      if (notes[i].todos[j].done === false) {
        console.log("Note: " + notes[i].description + " is not done yet.");
        return notes[i].todos[j]; // return the first uncompleted todo
      }
    }
  }
}

const notesInProgress = uncompletedNotes(notes);
console.log("Notes In Progress: ", notesInProgress);

console.log(notes[0].todos[0].done); // log di prova
