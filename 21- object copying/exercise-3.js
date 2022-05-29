const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    state: "Italy",
    region: "Lazio",
    city: "Rome",
  },
};

// Copy the person object to a new object called person2
// JSON.stringify() takes in an object and creates a JSON string from it
// JSON.parse() takes in a JSON string and creates an object from it

const person2 = JSON.parse(JSON.stringify(person1));

person2.address.region = "Lombardia";
person2.address.city = "Milan";

console.log(person1);
console.log(person2);
