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
function adultFilter() {
  return persons.filter(function (item) {
    if (item.age >= 18) {
      return item.name;
    }
  });
}
console.log(adultFilter());

// METODO 2
function filterAge() {
  const adults = [];

  for (let item of persons) {
    if (item.age >= 18) {
      adults.push(item.name);
    }
  }
  return adults;
}
console.log(filterAge());
