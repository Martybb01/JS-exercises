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

// METODO 1
const nicknames = persons.map((item) => `${item.name}-${item.age}`);
console.log(nicknames);

// METODO 2
function nicknameMap() {
  return persons.map(function (item) {
    return `${item.name}-${item.age}`;
  });
}

console.log(nicknameMap());
