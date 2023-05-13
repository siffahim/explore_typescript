"use strict";
class StudentBankAccount {
    constructor(account_no, name, balance) {
        this.account_no = account_no;
        this.name = name;
        this._balance = balance;
    }
    test() {
        console.log("Hi");
    }
    //getter
    get balance() {
        return this._balance;
    }
    //setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const alisonAccount = new StudentBankAccount(4002, "Alison", 1000);
console.log(alisonAccount.balance);
alisonAccount.deposit = 500;
console.log(alisonAccount.balance);
