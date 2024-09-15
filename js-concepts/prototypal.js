//prototypal inheritance

const animal = {
    speak(){
        console.log(`${this.name} makes a sound.`);
    }
};

const dog = Object.create(animal);
dog.name='Dog';
dog.speak();