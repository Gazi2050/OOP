### 1. Classes, Attributes, and Methods

**Describe:**
A class defines the blueprint for objects. It contains attributes (properties/data) and methods (functions/actions). The constructor initializes attributes. Methods define what the object can do with that data.

**Code example:**

```ts
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
```

### 2. Constructor

**Describe:**
A constructor is a special method inside a class. It runs automatically when you create a new object from that class. Its job is to set up the object’s initial properties (attributes) with the values you provide.

**Code example:**

```ts
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota
```

### 3. Instance

**Describe:**
An instance is an actual object created from a class blueprint. You create it using the `new` keyword. Each instance has its own separate data and can behave independently.

**Code example:**

```ts
class Person {
  constructor(public name: string) {}
}

const lucas = new Person("Lucas");  // instance 1
const maria = new Person("Maria");  // instance 2

console.log(lucas.name);  // Lucas
console.log(maria.name);  // Maria
```

### 4. **Interfaces**

**Describe:**
An **interface** in TypeScript defines a **contract** — a list of required **attributes and methods**.
Any class that **implements** an interface must include **everything** the interface defines, with **matching types**.

Interfaces help ensure consistency across different classes that follow the same rules or structure.

**Code example:**

```ts
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
```

### 5. **Abstract Classes**

**Describe:**
An **abstract class** is a blueprint.You **can’t create an object** from it. It can have real methods and also methods that **must be implemented** in subclasses.

**Code example:**

```ts
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
console.log(emma);
```

### Is an abstract class like an interface?

They are similar because both **define a structure** that other classes must follow, but they work differently.

**Here’s how they differ simply:**

| Feature                  | Interface                      | Abstract Class                            |
| ------------------------ | ------------------------------ | ----------------------------------------- |
| Can have method bodies?  | No, only method signatures     | Yes, can have full methods too            |
| Can hold properties?     | Yes, but only types, no values | Yes, can hold real properties with values |
| Can be instantiated?     | No                             | No                                        |
| Can provide shared code? | No                             | Yes, can share code with subclasses       |
| How do classes use it?   | `implements` keyword           | `extends` keyword                         |

* **Interface:** Just says *“you must have these methods”* — no code inside them.
* **Abstract class:** Can say *“here’s some code you can use, but you must also write this missing part.”*

## `Object-Oriented Programming (OOP) principles`

### 1. **Inheritance**

**Describe:**
Inheritance allows one class (**child**) to use properties and methods of another class (**parent**).
This helps **reuse code** and **specialize behavior** in the child class.

**Code example:**

```ts
class BankAccount {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

class CurrentAccount extends BankAccount {
  overdraftLimit: number;

  constructor(initialBalance: number, overdraftLimit: number) {
    super(initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  override withdraw(amount: number) {
    const total = this.balance + this.overdraftLimit;
    if (amount <= total) {
      this.balance -= amount;
    }
  }
}

const account = new CurrentAccount(100, 50);
account.deposit(50);     // balance: 150
account.withdraw(180);   // balance: -30
console.log(account);
```

### 2. **Polymorphism**

**Describe:**
Polymorphism means **same method name**, but **different behavior** depending on the object.
This allows flexible and reusable code.

**Code example:**

```ts
function sendMoney(sender: BankAccount, receiver: BankAccount, amount: number) {
  sender.withdraw(amount);
  receiver.deposit(amount);
}

const lucas = new CurrentAccount(300, 100);
const maria = new BankAccount(100);

sendMoney(lucas, maria, 200); // lucas.withdraw uses CurrentAccount logic
console.log(lucas, maria);
```

> `withdraw` works differently for each account type — but we **call it the same way**. That’s polymorphism!

### 3. **Encapsulation**

**Describe:**
Encapsulation means **hiding internal data** and only exposing what’s needed.
This makes the code **secure**, **modular**, and **easier to maintain**.

**Code example:**

```ts
class Person {
  private firstName: string;
  private lastName: string;
  protected birthDate: Date;

  constructor(firstName: string, lastName: string, birthDate: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Professor extends Person {
  getProfile() {
    console.log(this.getFullName()); // ✅ public
    console.log(this.birthDate);     // ✅ protected
    // console.log(this.firstName);  // ❌ Error - private
  }
}

const lucas = new Professor("Lucas", "Garcez", new Date("1996-02-06"));
console.log(lucas.getFullName());    // ✅
```

### 4. **Abstraction**

**Describe:**
Abstraction means defining the **structure** without full implementation.
It is done using **interfaces** or **abstract classes**.

**Code example (interface):**

```ts
interface BankAccount {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

class MyAccount implements BankAccount {
  balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }
}
```

**Code example (abstract class):**

```ts
abstract class AbstractAccount {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  abstract withdraw(amount: number): void;
}

class SimpleAccount extends AbstractAccount {
  withdraw(amount: number): void {
    this.balance -= amount;
  }
}
```

### ✅ Quick Summary Table

| Principle         | What it means                                  | Benefit                         |
| ----------------- | ---------------------------------------------- | ------------------------------- |
| **Inheritance**   | One class reuses another class’s code          | Reuse & extend behavior         |
| **Polymorphism**  | Same method, different implementation          | Flexibility                     |
| **Encapsulation** | Hide internal details, show only what's needed | Security & clean code           |
| **Abstraction**   | Define *what* should happen, not *how*         | Focus on structure, not details |
