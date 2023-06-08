class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello(){
        return `Hello, ${this.firstname} ${this.lastname}!`; 
    }
}

const person = new Person('John', 'Doe');
console.log(person.sayHello());