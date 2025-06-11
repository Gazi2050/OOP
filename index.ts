const person = {
    name: "Gazi",
    age: 23,
};

class Person {
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