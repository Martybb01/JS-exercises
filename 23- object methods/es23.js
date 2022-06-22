const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
console.log(Object.values(person));

// sintassi corretta
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
