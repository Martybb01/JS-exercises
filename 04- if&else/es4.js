// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if (role === "ceo") {
    return `you're a ${role} and your income is 2200`;
  } else if (role === "manager" || role === "cto") {
    return `you're a ${role} and your income is 1800`;
  } else if (role === "developer") {
    return `You're a ${role} and your income is 1500`;
  } else {
    return `you're a ${role} and your income is 1000`;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
