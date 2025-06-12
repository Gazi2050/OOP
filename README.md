### 1. Classes, Attributes, and Methods

**Describe:**
A class defines the blueprint for objects. It contains attributes (properties/data) and methods (functions/actions). The constructor initializes attributes. Methods define what the object can do with that data.

**Code example:**

```ts
class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const lucas = new Person("Lucas", "Garcez", 28);
console.log(lucas.getFullName()); // Lucas Garcez
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

Perfect — here it is in your requested format:

---

### 4. **Interfaces**

**Describe:**
An **interface** in TypeScript defines a **contract** — a list of required **attributes and methods**.
Any class that **implements** an interface must include **everything** the interface defines, with **matching types**.

Interfaces help ensure consistency across different classes that follow the same rules or structure.

---

**Code example:**

```ts
// Interface: the contract for a bank account
interface BankAccount {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

// A class that follows the BankAccount contract
class CurrentAccount implements BankAccount {
  balance: number = 0;
  overdraftLimit: number = 500;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
    }
  }
}

// Another class that follows the same interface
class SavingsAccount implements BankAccount {
  balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}
```
