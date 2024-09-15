// create custom new operator ES5

function myNew(constructor, ...args){
    const obj = Object.create(constructor.prototype);
    const res = constructor.apply(obj, args);
    return res instanceof Object? res: obj;
}

function Person(name){
    this.name = name;
}

const person = myNew(Person, 'Roshan');
console.log(person.name);