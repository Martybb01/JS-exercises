class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      // throw new Error("The amount provided cannot be negative"); // Use custom Error class
      throw new NegativeAmountError("insert a positive amount");
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      //throw new Error("The amount provided cannot be negative"); // Use custom Error class
      throw new NegativeAmountError("insert a positive amount");
    }

    if (this.#amount < amount) {
      // throw new Error("You cannot withdraw more than account balance"); // Use custom Error class
      throw new WithdrawNotPermittedError("you are poor");
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}
class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}
class WithdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = "WithdrawNotPermittedError";
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log("Something went wrong during bank account operations");
  console.log(e.name);
}
