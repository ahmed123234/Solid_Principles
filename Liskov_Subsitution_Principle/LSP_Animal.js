class Animal {

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(this.name, "makes a sound");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(this.name, "barks");
    }
}


class Cat extends Animal {
    makeSound() {
        console.log(this.name, "meows");
    }
}


function makeAnimalSound(animal) {
    animal.makeSound();
}


const cheetah = new Animal('Cheetah');
makeAnimalSound(cheetah);

const dog = new Dog('Jack');
makeAnimalSound(dog);


const cat = new Cat('Khole');
makeAnimalSound(cat);

module.exports = { Animal, makeAnimalSound };
