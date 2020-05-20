import moment from 'moment';
import { Credit } from './credit';

//An account holds a balance and a transacion history
//an account can print statements

export class Account {
  constructor(balance = 0, creditClass = Credit) {
    this.balance = balance;
    this.transactionHistory = [];
    this.creditClass = creditClass;
  }

  deposit(amount) {
    //add dependency from Credit calss
    const credit = new this.creditClass(amount);
    //push this transaction to transaction history

  }

}