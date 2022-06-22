class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  }
  view() {
    console.log(`your balance is ${this.balance}`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view(); // your balance is 900
