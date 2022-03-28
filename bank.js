const Transaction = require('./transaction');

class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  };

  recordTransaction(date, credit, debit, balance) {
    const transaction = new Transaction(date, credit, debit, balance);
    this.transactions.push(transaction);
  };

  deposit(money, date) {
    this.balance += money;
    this.recordTransaction(date, money, null, this.balance);
  };

  withdraw(money, date) {
    this.balance -= money;
    this.recordTransaction(date, null, money, this.balance);
  };

  formatOutput(transaction) {
    let output = "";

    output += transaction.date;
    output += " || ";

    if (transaction.credit) {
      output += transaction.credit;
    }
    output += " || ";

    if (transaction.debit) {
      output += transaction.debit;
    }
    output += " || ";

    output += transaction.balance;
    console.log(output);
  }

  printTransactions() {   
    console.log("date || credit || debit || balance") 
    this.transactions.slice().reverse().forEach(transaction => this.formatOutput(transaction));
  }

}

module.exports = Bank;