import { expect } from 'chai';
import { Account } from './account';
import moment from 'moment';

describe('Account', () => {

  describe('#balance', () => {
    it('starts with value of 0', () => {
      let account = new Account();
      expect(account.balance).to.equal(0);
    })
  })

  describe('#transactionHistory', () => {
    it('starts as an empty list', () => {
      let account = new Account();
      expect(account.transactionHistory).to.deep.equal([]);
    })
  })

  //add deposit method
  //it instantiates a transaction with
  //date
  //credit
  //debit - this must be left empty
  //new balance
  //updates balance
  //pushes transaction to transaction history

//   describe('#deposit', () => {
//     it('creates a transaction with a positive credit and 0 debit', () => {
//       let account = new Account();
//       account.deposit(15);
// // use mock to test dependency injection
//       const mockCredit = {}
//       expect(account.deposit).to.equal(15);
//     })
//   })

  //add withdraw method
  //it instantiates a transaction with
  //date
  //credit - this must be left empty but the field exists in the form
  // deposit
  // new balance
  //updates balance
  //pushes transaction to transaction history


})