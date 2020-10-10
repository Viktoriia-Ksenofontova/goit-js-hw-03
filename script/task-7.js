/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = Date.now();
    return { id, type, amount };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

  deposit(amount) {
    this.balance += amount;

    this.transactions.push(this.createTransaction(amount, 'deposit'));
    console.log(`Сумма в размере ${amount} у.е. зачислена на ваш счет`);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводит сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `Сумма ${amount} у.е. превышает баланс вашего счета, снятие невозможно`,
      );
    } else {
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
      console.log(`Вы сняли сумму в размере ${amount} у.е.`);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Ваш баланс ${this.balance} у.е.`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      for (const key in item) {
        if (item[key] === id) {
          return item;
        } else {
          return `Транзакция ${id} не найдена`;
        }
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      for (const key in item) {
        if (item[key] === type) {
          total += item.amount;
        }
      }
    }
    return `Общая сумма по операции ${type} = ${total} у.е.`;
  },
};

account.deposit(200);
console.log(account.getBalance());
account.withdraw(1000);
console.log(account.transactions);
account.getTransactionTotal('deposit');
account.withdraw(100);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(1602346477979));
account.deposit(1200);
console.log(account.getTransactionTotal('deposit'));
console.log(account.getBalance());
