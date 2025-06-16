interface person {
    name: string;
    age: number;
};

class Person implements person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getPerson() {
        return `name:${this.name},age:${this.age}`
    }
}

const user = new Person('jack', 35);
console.log(user);

abstract class Account {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    // Method without body – must be implemented in child class
    abstract withdraw(amount: number): void;
}

class CurrentAccount extends Account {
    withdraw(amount: number) {
        const fee = 2;
        const total = amount + fee;

        if (this.balance >= total) {
            this.balance -= total;
        } else {
            console.log("Not enough money");
        }
    }
}

class SavingsAccount extends Account {
    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Not enough money");
        }
    }
}

const jack = new CurrentAccount(1000);
jack.deposit(200);
jack.withdraw(500);
console.log(jack);

const emma = new SavingsAccount(1500);
emma.deposit(100);
emma.withdraw(300);
// console.log(emma);