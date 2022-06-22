// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return `you're a ${role} and your salary is 2200`;

    case "manager":
    case "cto":
      return `you're a ${role} and your salary is 1800`;

    case "developer":
      return `you're a ${role} and your income is 1500`;

    default:
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
