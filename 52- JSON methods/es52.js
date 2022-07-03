const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

function isNumber(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const json2 = JSON.stringify(person, isNumber);
const json = JSON.parse(JSON.stringify(person, isNumber));

console.log(json2); // {"id":1, "age": 25 }
console.log(json); // { id: 1, age: 25 }
