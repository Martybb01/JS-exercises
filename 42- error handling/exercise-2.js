class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new Error("The amount provided cannot be negative");
      }
      this.#amount += amount;
    } catch (error) {
      console.log(error);
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new Error("The amount provided cannot be negative");
      }
      if (amount > this.#amount) {
        throw new Error(
          "The amount provided cannot be greater than the current amount"
        );
      }
      this.#amount -= amount;
    } catch (error) {
      console.log(error);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // Error: The amount provided cannot be greater than the current amount
bankAccount.view(); // 1700
