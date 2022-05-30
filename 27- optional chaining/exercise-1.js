const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.address?.city); // undefined
console.log(person.fullName?.()); // undefined

// The optional chaining operator provides a way to simplify
// accessing values through connected objects when it's possible
// that a reference or function may be undefined or null
