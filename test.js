function makeAccount(number) {
  let balance = 0;
  let transactions = [];

  return {
    number() {
      return number;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },

    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount });
      return amount;
    },

    withdraw(amount) {
      if (amount > balance) amount = balance;
      balance -= amount;

      transactions.push({type: 'withdraw', amount });
      return amount;
    },
  };
}

function makeBank() {
  accounts: [];

  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}

let bank = makeBank();
let account = bank.openAccount();
account.balance();
// 0
account.deposit(17);
// 17
let secondAccount = bank.openAccount();
secondAccount.number();
// 102
account.transactions();
// [Object]