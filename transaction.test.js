const Transaction = require('./transaction');

describe("transaction", () => {
  it("has a date", () => {
    const transaction = new Transaction("01/02/2022", 100, null, 100);
    expect(transaction.date).toBe("01/02/2022");
  });

  it("has a credit value", () => {
    const transaction = new Transaction("01/02/2022", 100, null, 100);
    expect(transaction.credit).toBe(100);
  });

  it("has a debit value", () => {
    const transaction = new Transaction("01/02/2022", null, 100, 100);
    expect(transaction.debit).toBe(100);
  });

  it("has a balance", () => {
    const transaction = new Transaction("01/02/2022", 100, null, 100);
    expect(transaction.balance).toBe(100);
  });

});