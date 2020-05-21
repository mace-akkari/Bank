import moment from 'moment';

export class TransactionCredit {
  constructor(amount, balance = 0) {
    this.date = Date.now();
    this.credit = amount;
    this.debit = null;
    this.balance = balance;
  }

  getTransaction() {
    return {
      date: this._formatDate(),
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
      }
  }
  _formatDate() {
    return moment(this.date).format("DD/MM/YYYY ");
  }


//add method increaseBalance - add this in account?
//a deposit tells account to update balance
//or tells balance to update?
//add method to display trasanciton as per table requirement
//this class is reponsible for formatting it self
//account pulls it ready to use?

}
