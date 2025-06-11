### 1. Constructor

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

---

### 2. Instance

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

---

### 3. Classes, Attributes, and Methods

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
