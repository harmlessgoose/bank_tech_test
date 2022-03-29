# How to run

After running Node, you can interact with the bank using the following commands:

### Setup
`const Bank = require('./bank');`
`const bank = new Bank();`

### Deposit money
`bank.deposit(10,"test date 1")`

### Withdraw money
`bank.withdraw(10, "test date 2")`

### Print all transactions
`bank.printTransactions()`

# Tests
Run the command `jest`

# Acceptance criteria
![Acceptance criteria](acceptance_criteria.png)

# Approach
I approached this task by TDD'ing each criteria, and then coding the feature to pass the test. 

# Code Structure
I initially decided to make a main bank class that did everything, but then I decided to refactor the transactions into their own class to help keep my code lean.