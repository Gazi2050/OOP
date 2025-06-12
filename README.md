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
