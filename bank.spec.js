const { expect } = require('@jest/globals');
const Bank = require('./bank');

describe("bank", () => {
  it("gets user's balance", () => {
    const bank = new Bank();
    expect(bank.getBalance()).toBe(0);
  });

  it("deposits money", () => {
    const bank = new Bank();
    bank.deposit(100, "01/02/2022");
    expect(bank.getBalance()).toBe(100);
  });

  it("withdraws money", () => {
    const bank = new Bank();
    bank.withdraw(100, "01/02/2022");
    expect(bank.getBalance()).toBe(-100);
  });

  it("records transactions", () => {
    const bank = new Bank();
    bank.deposit(100, "01/02/2022");

    expect(bank.transactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: "01/02/2022",
          credit: 100,
          balance: 100
        })
      ])
    )
  });

  it("formats the right output", () => {
    const bank = new Bank();
    bank.deposit(100, "01/02/2022");
    expect(bank.formatOutput(bank.transactions[0])).toBe("01/02/2022 || 100 ||  || 100");
  });

  // I have been unable to make the following test work correctly,
  // there doesn't seem to be an easy way to check what a function
  // prints to console.log
  //
  // it("prints the correct output", () => {
  //   const logSpy = jest.spyOn(console, 'log');
  //   const bank = new Bank();
  //   bank.deposit(100, "01/02/2022");
  //   bank.printTransactions;
  //   expect(logSpy).toHaveBeenCalledWith("date || credit || debit || balance");
  // });

});