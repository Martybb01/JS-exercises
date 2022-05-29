# Object Copying - Exercise 3

In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla alla variabile `person2`, tuttavia utilizzando il metodo `Object.assign()` e modificando la proprietà `address`, questa viene modificata anche per l'oggetto `person1`. Come posso eseguire un "deep copying" dell'oggetto `person1`?

- il metodo assign() copia le funzioni e gli immediati membri degli oggetti ma non quelli nidificati dunque non va bene
- il metodo JSON.stringify() e JSON.parse() non copiano le funzioni ma copiano gli oggetti nidificati, quindi è quello che dobbiamo usare!
