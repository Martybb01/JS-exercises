class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    if (typeof amount === "number") {
      this.balance += amount;
      return this.balance;
    } else {
      console.log("please enter a number");
    }
  }
  withdraw(amount) {
    if (typeof amount === "number") {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("please enter a number");
    }
  }
  view() {
    console.log(`your balance is ${this.balance}`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.deposit("ciao");
bankAccount.withdraw(800);
bankAccount.view(); // your balance is 900
