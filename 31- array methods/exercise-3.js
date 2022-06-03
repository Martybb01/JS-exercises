// Metodo 1 con reduce()
function calculateAverageAge(persons) {
  return persons.reduce((acc, person) => acc + person.age, 0) / persons.length;
}

// Metodo 2 con forEach()
function averageAge(persons) {
  let sum = 0;
  persons.forEach(function (person) {
    sum += person.age;
  });
  return sum / persons.length;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
const average2 = averageAge(persons);
console.log(persons);
console.log(average); // 21.8
console.log(average2); // 21.8
