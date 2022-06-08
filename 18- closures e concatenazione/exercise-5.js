function memoize(fn) {
  let cache = {};
  let refNum = null; // lo inizializza ogni volta

  return (num) => {
    if (refNum == null) {
      refNum = num; // se ancora non è stato impostato siamo nel primo giro, quindi refnum = numero dell'utente
    }

    if (num in cache) {
      console.log(num, refNum);
      if (num == refNum) {
        // allora siamo all'ultimo giro e quindi ho già il risultato
        refNum = null; // lo reimposto così prossima volta che la funzione viene chiamata sarà di nuovo null
        return `Fetching from cache for ${cache[num]}`;
      }
      return cache[num]; // restituisco il numero perchè non è l'ultimo giro
    } else {
      cache[num] = fn(num);
      console.log(num, refNum);
      if (num == refNum) {
        refNum = null;
        return `Calculating from cache for ${cache[num]}`;
      }
      return cache[num];
    }
  };
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1, num == 1);
}

factorial = memoize(factorial);
console.log(factorial(10)); // 10 è il numero passato dell'utente
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(12));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(12));
console.log(factorial(13));
