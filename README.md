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
