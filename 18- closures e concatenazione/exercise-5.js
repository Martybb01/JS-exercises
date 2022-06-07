function memoize(fn) {
  let chace = {};
  return function addCache(num) {
    if (num in chace) {
      return `Fetching from chace for ${chace[num]}`;
    } else {
      chace[num] = fn(num);
      return chace[num];
      // return `Calculating result for ${chace[num]}` non funziona nel mio caso non so perchè
    }
  };
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

factorial = memoize(factorial);
console.log(factorial(10)); // 3628800
console.log(factorial(6)); // Fetching from chace for 720
console.log(factorial(5)); // Fetching from chace for 120
