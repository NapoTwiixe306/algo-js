class Animal{
    sayHello(){
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal{
    static greeting = "Meow";

    constructor(name){
        super()
        this.name = name;
    }
}

class Dog extends Animal{
    static greeting = 'Woof';
    constructor(name){
        super();
        this.name = name;
    }
}

const cat = new Cat('skitty');
const dog = new Dog('Pixel');

console.log(cat.sayHello());
console.log(dog.sayHello());