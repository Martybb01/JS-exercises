const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

// const person2 = { ...person1 };
// copy the person object to a new object called person2 using spread operator but it is a shallow copy so...
const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = "Milan";

console.log(person1);
console.log(person2);
