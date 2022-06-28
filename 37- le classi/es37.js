class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    if (typeof amount === "number") {
      this.balance += amount;
      return this.balance;
    } else {
      console.log("enter a number");
    }
  }
  withdraw(amount) {
    if (typeof amount === "number") {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("enter a number");
    }
  }
  view() {
    console.log(this.balance);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
