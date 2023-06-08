class Person{
    constructor(firstanme, lastname){
        this._firstname = firstanme;
        this._lastname = lastname;
    }

    get name(){
        return `${this._firstname} ${this._lastname}`;
    }

    set name(fullname){
        const [firstname, lastname] = fullname.split(' ');
        this._firstname = firstname;
        this._lastname = lastname;
    }
}

const person = new Person('John', 'Doe');
console.log(person.name);

person.name = 'Jane Smith';

console.log(person)