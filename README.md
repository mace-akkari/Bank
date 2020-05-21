# A simple REPL bank application

During week 10 at Makers we are practicing the concepts we have covered so far. 

The goal of this project is to practice our OOP and TDD skills.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```


## User stories

### User story 1

* As a user, when I deposit money into my bank account, 
* I want the date,  amount, and my updated balance to be recorded
* So I can have a record of my deposits and my new balance

### User story 2

* As a user, when I withdraw money from my bank account, 
* I wan to the date, amount, and my updated balance to be recorded
* So that I can have a record of my withdrawals and the my new balnce

### User story 3

* As a user, when I want to know what transactions have I performed into my account
* I want to be able see each transaction with its amount, date and how it affected my overall balance
* so that I can know if the balance and transactions match what I was expecting

## Class diagram

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdFRyYW5zYWN0aW9uIDx8LS0gQ3JlZGl0XG5cdFRyYW5zYWN0aW9uIDx8LS0gRGViaXRcbiAgICBUcmFuc2FjdGlvbiA6IC1hbW91bnRcbiAgICBUcmFuc2FjdGlvbiA6IC1kYXRlXG4gICAgVHJhbnNhY3Rpb24gOiAtZ2V0RGF0YSgpXG4gICAgY2xhc3MgQ3JlZGl0e1xuICAgIC1kZWJpdFxuICAgIH1cbiAgICBjbGFzcyBEZWJpdHtcbiAgICAtY3JlZGl0XG4gICAgfVxuXG4gICAgY2xhc3MgQWNjb3VudHtcbiAgICAgIC1iYWxhbmNlXG4gICAgICAtdHJhbnNhY3Rpb25IaXN0b3J5XG4gICAgICArZGVwb3NpdCgpXG4gICAgICArd2l0aGRyYXcoKVxuICAgICAgK3N0YXRlbWVudCgpXG4gICAgfVxuXG5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdFRyYW5zYWN0aW9uIDx8LS0gQ3JlZGl0XG5cdFRyYW5zYWN0aW9uIDx8LS0gRGViaXRcbiAgICBUcmFuc2FjdGlvbiA6IC1hbW91bnRcbiAgICBUcmFuc2FjdGlvbiA6IC1kYXRlXG4gICAgVHJhbnNhY3Rpb24gOiAtZ2V0RGF0YSgpXG4gICAgY2xhc3MgQ3JlZGl0e1xuICAgIC1kZWJpdFxuICAgIH1cbiAgICBjbGFzcyBEZWJpdHtcbiAgICAtY3JlZGl0XG4gICAgfVxuXG4gICAgY2xhc3MgQWNjb3VudHtcbiAgICAgIC1iYWxhbmNlXG4gICAgICAtdHJhbnNhY3Rpb25IaXN0b3J5XG4gICAgICArZGVwb3NpdCgpXG4gICAgICArd2l0aGRyYXcoKVxuICAgICAgK3N0YXRlbWVudCgpXG4gICAgfVxuXG5cbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)
```mermaid
Transaction <|-- Credit
	Transaction <|-- Debit
    Transaction : -amount
    Transaction : -date
    Transaction : -getData()
    class Credit{
    -debit
    }
    class Debit{
    -credit
    }

    class Account{
      -balance
      -transactionHistory
      +deposit()
      +withdraw()
      +statement()
    }

