let personName = "Paul";

function canPlay() {
  if (personName === "Paul") {
    return `${personName} plays football`;
  } else {
    return "Non so chi sei!";
  }
}

console.log(canPlay());
